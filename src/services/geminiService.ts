import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

// The API key is injected by the platform into the environment
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.warn("GEMINI_API_KEY is not set. Ensure it is configured in the Secrets panel.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || '' });

export async function* streamChat(messages: Message[]) {
  if (!apiKey) {
    throw new Error("API Key missing. Please configure it in the Secrets panel.");
  }

  // Convert our message format to Gemini's format
  // Note: Gemini expects 'user' and 'model' roles
  const history = messages.slice(0, -1).map(m => ({
    role: m.role,
    parts: [{ text: m.content }]
  }));

  const lastMessage = messages[messages.length - 1].content;

  const chat = ai.chats.create({
    model: "gemini-3-flash-preview",
    history: history,
    config: {
      systemInstruction: "You are a highly capable, concise, and helpful personal AI assistant. You provide accurate, structured information. You use clear markdown for formatting. You are professional yet friendly.",
    }
  });

  try {
    const result = await chat.sendMessageStream({
      message: lastMessage
    });

    for await (const chunk of result) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
