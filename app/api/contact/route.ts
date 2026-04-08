import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.API_URL || 'https://internals.pointx.one';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { company, email, phone, requirements, industry } = body;

    // Validation
    if (!company || !email || !requirements) {
      return NextResponse.json(
        { error: true, msg: 'Company name, email, and requirements are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: true, msg: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Split company name into first/last for the backend
    const companyParts = company.trim().split(' ');
    const firstName = companyParts[0] || 'Website';
    const lastName = companyParts.slice(1).join(' ') || 'Lead';

    // Format message with all details
    const formattedMsg = `
Company: ${company}
Industry: ${industry || 'Not specified'}
Email: ${email}
Phone: ${phone || 'Not provided'}

Requirements:
${requirements}
    `.trim();

    // CORRECT ENDPOINT: /user/api/contactus/ (from the URL patterns list)
    const response = await fetch(`${API_BASE_URL}/user/api/contactus/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone || 'N/A',
        msg: formattedMsg
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json({
        error: false,
        msg: data.msg || 'Query submitted successfully',
        timestamp: new Date().toISOString()
      });
    }

    const errorText = await response.text();
    console.error('Backend error:', errorText);
    throw new Error('Backend contact endpoint failed');

  } catch (error: any) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        error: true, 
        msg: "Failed to send your message. Please try again later.",
      },
      { status: 200 }
    );
  }
}