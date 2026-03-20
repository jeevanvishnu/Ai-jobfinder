import { Resend } from "resend";
import { createWelcomeEmailTemplate } from "./emailTemplate.js";
import dotenv from "dotenv";
dotenv.config();

const getResendClient = () => {
    const apiKey = process.env.RESENT_MAIL;

    if (!apiKey) {
        throw new Error("Resend API key is missing. Set RESEND_API_KEY (or RESENT_MAIL).");
    }

    return new Resend(apiKey);
};

const sendEmail = async (name: string, email: string, clientURL: string) => {
    const resend = getResendClient();
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
    const appURL = clientURL || process.env.CLIENT_URL || "http://localhost:5173";

    const { data, error } = await resend.emails.send({
        from: `AI-JobFinder <${fromEmail}>`,
        to: email,
        subject: "Welcome to AI-JobFinder",
        html: createWelcomeEmailTemplate(name, appURL),
    });

    if (error) {
        throw new Error(`Email not sent: ${error.message}`);
    }

    return data;
};

export default sendEmail;
