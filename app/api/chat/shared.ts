// app/api/chat/shared.ts
import fs from "fs";
import path from "path";

// Business configuration
export const BUSINESS_NAME = "MP Pharmaceuticals group of Companies"; // Replace with your business name
export const BUSINESS_CONTACT = "WhatsApp: +919457239806"; // Replace with your WhatsApp number

// Store chat history and manage sessions
export const chatHistory: Record<string, { role: string; content: string }[]> = {};
export const activeSessions: Record<string, NodeJS.Timeout> = {};
export const SESSION_TIMEOUT = 10 * 60 * 1000; // 10 minutes

// Load business data from file
export let businessData = "";
try {
  const dataPath = path.join(process.cwd(), "db", "mp-pharma-data.txt");
  console.log("Loading business data from:", dataPath);
  businessData = fs.readFileSync(dataPath, "utf8");
  console.log("Business data loaded successfully");
} catch (error) {
  console.error("Failed to load business data:", error);
  businessData = "Basic business information not available.";
}

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