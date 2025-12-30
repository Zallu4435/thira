import { google } from "googleapis";

/**
 * PRODUCTION-READY GMAIL UTILITY
 * This utility uses OAuth2 to send emails via the restricted gmail.send scope.
 */

export async function sendGmail({ to, subject, html }: { to: string; subject: string; html: string }) {
    const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
    const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
    const REDIRECT_URI = "https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
    const GMAIL_USER = process.env.GMAIL_USER_EMAIL;

    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN || !GMAIL_USER) {
        throw new Error("Missing Gmail API environment variables");
    }

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

    // MIME message construction
    const nl = "\r\n";
    const mime = [
        `MIME-Version: 1.0`,
        `Content-Type: text/html; charset="UTF-8"`,
        `To: ${to}`,
        `From: ${GMAIL_USER}`,
        `Subject: ${subject}`,
        ``,
        html,
    ].join(nl);

    const encodedMessage = Buffer.from(mime)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");

    return await gmail.users.messages.send({
        userId: "me",
        requestBody: {
            raw: encodedMessage,
        },
    });
}
