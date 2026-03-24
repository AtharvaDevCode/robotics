
import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY || '');

// Comprehensive company knowledge base
const COMPANY_CONTEXT = `
You are the official AI assistant for Ensemble Control Inc., an industrial robotics procurement company.
CRITICAL INSTRUCTIONS:
- Always represent the company professionally
- If you don't know something specific, direct them to contact human support
- Never make up pricing, timelines, or technical specifications
- Keep responses concise (2-4 sentences max) unless detailed explanation is requested
- Always offer to connect them with a specialist for complex inquiries

COMPANY INFORMATION:
Name: Ensemble Control Inc.
Address: 1252 E Main Street Unit D, Columbus, OH 43205
Phone: +1 217 819 6382
Email: help@rewardwise.co
Website: ensemblecontrol.com (placeholder)

SERVICES:
1. Robotics Procurement - Sourcing industrial robots for warehouses, logistics, manufacturing
2. Needs Assessment - Analyzing facility requirements and workflow bottlenecks
3. Vendor Sourcing - Global network of robotics manufacturers
4. Integration Support - Deployment assistance and timeline management
5. ROI Analysis - Efficiency gain calculations and cost-benefit analysis

PROCESS:
1. Assessment - Facility analysis and requirement gathering
2. Procurement - Vendor comparison and negotiation
3. Integration - Deployment with minimal downtime

COMMON SCENARIOS:
- Pricing: "Pricing varies based on facility size and requirements. I'd recommend scheduling a consultation for a detailed quote."
- Technical specs: "Our engineering team can provide detailed technical specifications. Would you like me to connect you with a specialist?"
- Timeline: "Typical deployments range from 3-6 months depending on complexity. I can have our team provide a specific timeline for your project."
- Demo: "I can arrange a demonstration. Please provide your facility details and preferred contact method."
- Support: "For immediate assistance, please call us at +1 217 819 6382 or email help@rewardwise.co"

RESTRICTIONS:
- Do not discuss competitor pricing
- Do not guarantee specific ROI percentages without assessment
- Do not provide legal advice
- Always verify facts against this context
`;

export async function POST(req: NextRequest) {
  try {
    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY not configured');
      return NextResponse.json(
        { error: 'Service temporarily unavailable. Please contact support at +1 217 819 6382.' },
        { status: 503 }
      );
    }

    const { message, messageHistory = [] } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    // Input sanitization
    const sanitizedMessage = message.trim().slice(0, 1000); // Limit message length

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 300,
        topP: 0.8,
        topK: 40,
      },
    });

    // Build conversation history for context
    let conversationContext = COMPANY_CONTEXT;
    
    if (messageHistory.length > 0) {
      const recentHistory = messageHistory.slice(-6); // Last 6 messages for context
      conversationContext += "\n\nCONVERSATION HISTORY:\n";
      recentHistory.forEach((msg: any) => {
        conversationContext += `${msg.role === 'user' ? 'Customer' : 'Assistant'}: ${msg.text}\n`;
      });
    }

    const prompt = `${conversationContext}\n\nCustomer: ${sanitizedMessage}\nAssistant:`;

    console.log(`[Chatbot] Processing message: "${sanitizedMessage.substring(0, 50)}..."`);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if (!text || text.trim().length === 0) {
      throw new Error('Empty response from AI');
    }

    // Post-process response
    let processedText = text.trim();
    
    // Ensure professional sign-off if not present
    if (!processedText.match(/(contact|call|email|reach out|specialist|team)/i) && 
        processedText.length < 100) {
      processedText += " Is there anything else I can help you with?";
    }

    console.log(`[Chatbot] Response generated successfully`);

    return NextResponse.json({ 
      response: processedText,
      timestamp: new Date().toISOString()
    });
    
  } catch (error: any) {
    console.error('[Chatbot] API Error:', error);
    
    // Determine appropriate error message
    let errorMessage = "I apologize, but I'm experiencing technical difficulties.";
    
    if (error.message?.includes('quota')) {
      errorMessage = "Our AI service is currently at capacity. Please try again in a moment, or contact us directly at +1 217 819 6382.";
    } else if (error.message?.includes('safety')) {
      errorMessage = "I can't provide information on that topic. Please contact our team at +1 217 819 6382 for assistance.";
    } else if (error.message?.includes('network') || error.message?.includes('fetch')) {
      errorMessage = "I'm having trouble connecting to our servers. Please check your internet connection or call us at +1 217 819 6382.";
    }

    return NextResponse.json(
      { 
        response: errorMessage,
        error: true,
        fallback: true
      },
      { status: 200 } // Return 200 so frontend can display the fallback message
    );
  }
}