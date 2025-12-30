import { NextRequest, NextResponse } from "next/server";
import { sendGmail } from "@/utils/gmail";

/**
 * REFACTORED GMAIL API EMAIL SENDER
 */

export async function POST(request: NextRequest) {
    try {
        const { to, subject, html } = await request.json();

        if (!to || !subject || !html) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const res = await sendGmail({ to, subject, html });

        return NextResponse.json({ success: true, messageId: res.data.id });
    } catch (error: any) {
        console.error("Gmail API Error:", error.response?.data || error.message);

        if (error.message?.includes("invalid_grant")) {
            return NextResponse.json(
                { error: "OAuth refresh token is invalid or expired." },
                { status: 401 }
            );
        }

        return NextResponse.json(
            { error: "Failed to send email", details: error.message },
            { status: 500 }
        );
    }
}
