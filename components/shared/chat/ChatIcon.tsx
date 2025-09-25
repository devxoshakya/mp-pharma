"use client"

import { useState, FormEvent, useEffect, useRef } from "react"
import { Send, Bot, Paperclip, X, MessageCircle, CornerDownLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChatInput } from "@/components/ui/chat-input"

type ChatPosition = "bottom-right" | "bottom-left"
type ChatSize = "sm" | "md" | "lg" | "xl" | "full"

const chatConfig = {
  dimensions: {
    sm: "sm:max-w-sm sm:max-h-[500px]",
    md: "sm:max-w-md sm:max-h-[600px]",
    lg: "sm:max-w-lg sm:max-h-[700px]",
    xl: "sm:max-w-xl sm:max-h-[800px]",
    full: "sm:w-full sm:h-full",
  },
  positions: {
    // "bottom-right": "bottom-5 right-5",
    "bottom-left": "bottom-5 left-5",
  },
  chatPositions: {
    "bottom-right": "sm:bottom-[calc(100%+10px)] sm:right-0",
    "bottom-left": "sm:bottom-[calc(100%+10px)] sm:left-0",
  },
  states: {
    open: "pointer-events-auto opacity-100 visible scale-100 translate-y-0",
    closed: "pointer-events-none opacity-0 invisible scale-100 sm:translate-y-5",
  },
}

type Message = {
  id: number
  content: string
  sender: "user" | "ai"
}

export function AIBusinessChatbot({
  position = "bottom-left",
  size = "lg",
  icon = <Bot className="h-6 w-6" />,
  className
}: {
  position?: ChatPosition
  size?: ChatSize
  icon?: React.ReactNode
  className?: string
}) {
  const [messages, setMessages] = useState<Message[]>([])
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isInitializing, setIsInitializing] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)
  const messageIdRef = useRef(1)

  // Initialize chat session when component mounts
  useEffect(() => {
    async function startChatSession() {
      try {
        setIsInitializing(true)
        const response = await fetch('/api/chat/start', {
          method: 'POST',
        })
        
        if (!response.ok) {
          throw new Error('Failed to start chat session')
        }
        
        const data = await response.json()
        setSessionId(data.sessionId)
        
        // Add the greeting message
        messageIdRef.current = 1;
        setMessages([{
          id: messageIdRef.current++,
          content: data.greeting,
          sender: "ai"
        }])
      } catch (error) {
        console.error('Error starting chat session:', error)
        messageIdRef.current = 1;
        setMessages([{
          id: messageIdRef.current++,
          content: "Sorry, I couldn't initialize the chat. Please try again later.",
          sender: "ai"
        }])
      } finally {
        setIsInitializing(false)
      }
    }
    
    startChatSession()
  }, [])

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const toggleChat = () => setIsOpen(!isOpen)
  
  const restartChat = async () => {
    try {
      setIsInitializing(true)
      setMessages([])
      setSessionId(null)
      
      const response = await fetch('/api/chat/start', {
        method: 'POST',
      })
      
      if (!response.ok) {
        throw new Error('Failed to restart chat session')
      }
      
      const data = await response.json()
      setSessionId(data.sessionId)
      
      // Add the greeting message
      messageIdRef.current = 1;
      setMessages([{
        id: messageIdRef.current++,
        content: data.greeting,
        sender: "ai"
      }])
    } catch (error) {
      console.error('Error restarting chat session:', error)
      messageIdRef.current = 1;
      setMessages([{
        id: messageIdRef.current++,
        content: "Sorry, I couldn't restart the chat. Please refresh the page.",
        sender: "ai"
      }])
    } finally {
      setIsInitializing(false)
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim() || !sessionId) return

    const userMessage = input
    setInput("")
    
    // Add user message immediately
    setMessages((prev) => [
      ...prev,
      {
        id: messageIdRef.current++,
        content: userMessage,
        sender: "user",
      },
    ])
    
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          message: userMessage
        }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 404) {
          // Session expired, try to restart
          console.log('Session expired, attempting to restart chat')
          const restartResponse = await fetch('/api/chat/start', { method: 'POST' })
          if (restartResponse.ok) {
            const restartData = await restartResponse.json()
            setSessionId(restartData.sessionId)
            // Add session restart message
            setMessages((prev) => [
              ...prev,
              {
                id: messageIdRef.current++,
                content: "Your session expired. I've restarted our conversation. Please send your message again.",
                sender: "ai",
              },
            ])
            return
          }
        }
        throw new Error(data.error || 'Failed to send message')
      }
      
      // Add AI response
      setMessages((prev) => [
        ...prev,
        {
          id: messageIdRef.current++,
          content: data.reply,
          sender: "ai",
        },
      ])
    } catch (error) {
      console.error('Error sending message:', error)
      setMessages((prev) => [
        ...prev,
        {
          id: messageIdRef.current++,
          content: "Sorry, I couldn't process your request. Please try again or restart the chat if the issue persists.",
          sender: "ai",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // Format message content with bold text support
  const formatMessageContent = (content: string) => {
    if (!content.includes("**")) return content;
    
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const boldText = part.slice(2, -2);
        return <strong key={index}>{boldText}</strong>;
      }
      return part;
    });
  };

  return (
    <div className={cn("fixed z-50 bottom-5 left-5", className)}>
      <div
        ref={chatRef}
        className={cn(
          "flex flex-col bg-background border shadow-md overflow-hidden transition-all duration-250 ease-out",
          "sm:rounded-lg sm:absolute sm:w-[90vw] sm:h-auto sm:max-h-[80vh] sm:bottom-[calc(100%+10px)] sm:left-0",
          "fixed w-full h-[95vh] bottom-0 left-0 right-0",
          chatConfig.dimensions[size],
          isOpen ? chatConfig.states.open : chatConfig.states.closed
        )}
        style={{
          maxHeight: isOpen ? (typeof window !== 'undefined' && window.innerWidth >= 640 ? '80vh' : '95vh') : '0'
        }}
      >
        {/* Header */}
        <div className="flex items-center p-4 border-b flex-col text-center relative">
          <h1 className="text-xl font-semibold">MP Pharmaceuticals AI ✨</h1>
          <p className="text-sm text-muted-foreground mb-1">
            Ask me anything about our products and services.
          </p>
          <Button 
            title="Restart Chat" 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 left-2" 
            onClick={restartChat}
            disabled={isInitializing}
          >
            <Bot className="h-4 w-4" />
          </Button>
          <Button title="Close Chat" variant="ghost" size="icon" className="absolute top-2 right-2" onClick={toggleChat}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Chat Body */}
        <div className="flex-grow overflow-y-auto p-4 h-full">
          <div className="space-y-4">
            {isInitializing ? (
              <div className="flex gap-2 items-start">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shrink-0">
                  AI
                </div>
                <div className="rounded-lg bg-muted p-3 text-sm max-w-[80%]">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-pulse"></div>
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-pulse delay-150"></div>
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div 
                  key={message.id}
                  className={cn(
                    "flex gap-2 items-start",
                    message.sender === "user" ? "flex-row-reverse" : ""
                  )}
                >
                  <div 
                    className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium shrink-0",
                      message.sender === "user" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-primary text-primary-foreground"
                    )}
                  >
                    {message.sender === "user" ? "U" : "AI"}
                  </div>
                  <div 
                    className={cn(
                      "rounded-lg p-3 text-sm max-w-[80%]",
                      message.sender === "user" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted"
                    )}
                  >
                    {formatMessageContent(message.content)}
                  </div>
                </div>
              ))
            )}

            {isLoading && (
              <div className="flex gap-2 items-start">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shrink-0">
                  AI
                </div>
                <div className="rounded-lg bg-muted p-3 text-sm max-w-[80%]">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-pulse"></div>
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-pulse delay-150"></div>
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-2 sm:p-4 mt-auto">
          <form
            onSubmit={handleSubmit}
            className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
          >
            <ChatInput
              value={input}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
              disabled={isInitializing || !sessionId}
            />
            <div className="flex items-center p-2 sm:p-3 pt-0 justify-between">
              {/* <div className="flex">
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  disabled={isInitializing || !sessionId}
                >
                  <Paperclip className="size-4" />
                </Button>
              </div> */}
              <Button 
                type="submit" 
                size="sm" 
                className="ml-auto gap-1.5"
                disabled={isInitializing || !sessionId || !input.trim()}
              >
                <span className="hidden sm:inline">Send Message</span>
                <span className="sm:hidden">Send</span>
                <CornerDownLeft className="size-3.5" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Chat Toggle Button */}
      <Button
        variant="default"
        onClick={toggleChat}
        className={cn(
          "w-14 h-14 rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:shadow-black/30 transition-all duration-300",
          isOpen ? "sm:opacity-100 opacity-0" : "opacity-100"
        )}
        title="Open Chat"
        aria-label="Open Chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : icon}
      </Button>
    </div>
  )
}