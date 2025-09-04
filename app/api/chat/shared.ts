import { data } from "@/db/mp-pharma-data"

// Business configuration
export const BUSINESS_NAME = "MP Pharmaceuticals group of Companies"; // Replace with your business name
export const BUSINESS_CONTACT = "WhatsApp: +918687868783"; // Replace with your WhatsApp number

// Store chat history and manage sessions
export const chatHistory: Record<string, { role: string; content: string }[]> = {};
export const activeSessions: Record<string, NodeJS.Timeout> = {};
export const SESSION_TIMEOUT = 10 * 60 * 1000; // 10 minutes

// Load business data from file
export const businessData = data;//data.replace(/\n/g, ' ').replace(/"/g, '\\"');

// Session management with automatic cleanup
export function resetSessionTimeout(sessionId: string) {
  // Clear existing timeout if any
  if (activeSessions[sessionId]) {
    clearTimeout(activeSessions[sessionId]);
  }

  // Set new timeout that will delete the session history when expired
  activeSessions[sessionId] = setTimeout(() => {
    // Delete chat history for this session
    delete chatHistory[sessionId];

    // Delete the timeout reference
    delete activeSessions[sessionId];

    console.log(`Session ${sessionId} expired and history cleaned up`);
  }, SESSION_TIMEOUT);
}