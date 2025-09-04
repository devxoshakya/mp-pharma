// app/api/chat/start/route.ts
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { chatHistory, resetSessionTimeout, BUSINESS_NAME } from "../shared";

export async function POST(request: NextRequest) {
  try {
    // Generate new session ID
    const sessionId = uuidv4();
    
    // Initialize empty chat history
    chatHistory[sessionId] = [];
    
    // Set session timeout
    resetSessionTimeout(sessionId);
    
    // Create greeting message
    const greeting = `Hello! Welcome to ${BUSINESS_NAME}. How can I help you today?`;
    
    // Add greeting to chat history
    chatHistory[sessionId].push({ role: "model", content: greeting });
    
    // Return session ID and greeting
    return NextResponse.json({ 
      sessionId,
      greeting
    });
  } catch (error) {
    console.error("Error creating chat session:", error);
    return NextResponse.json(
      { error: "Failed to create chat session" },
      { status: 500 }
    );
  }
}

export const runtime = "edge";