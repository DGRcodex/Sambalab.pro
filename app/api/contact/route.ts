import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { ok: false, error: "Missing required fields." },
                { status: 400 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Send email
        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: "Nuevo mensaje desde el formulario de Sambalab",
            text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
            html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { ok: false, error: "Internal server error." },
            { status: 500 }
        );
    }
}
