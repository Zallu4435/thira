import { NextRequest, NextResponse } from "next/server";
import { sendGmail } from "@/utils/gmail";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate using shared schema
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      const issue = validation.error.issues[0];
      return NextResponse.json(
        { error: issue.message, field: issue.path[0] },
        { status: 400 }
      );
    }

    const { name, email, phone, businessType, message } = validation.data;

    // Send email using Gmail API
    await sendGmail({
      to: process.env.GMAIL_USER_EMAIL!,
      subject: `New Lead: ${name} (${businessType})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0077ff;">New Contact Form Submission</h2>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Business Type:</strong> ${businessType}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
          <p style="font-size: 12px; color: #999; margin-top: 30px;">Sent via Thira Website Contact Form</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Thank you! We'll get back to you within 24 hours." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
