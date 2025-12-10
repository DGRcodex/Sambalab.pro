// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const {
            name,
            company,
            email,
            phone,
            service,
            message,
        } = await req.json();

        // Basic validation
        if (!name || !company || !email || !phone || !service || !message) {
            return NextResponse.json(
                { ok: false, error: "Missing required fields." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: Number(process.env.EMAIL_PORT) === 465,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const htmlBody = `
      <h2>Nuevo contacto desde Sambalab</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Empresa:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Servicio:</strong> ${service}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: "Nuevo mensaje desde el sitio Sambalab",
            text: `
Nombre: ${name}
Empresa: ${company}
Email: ${email}
Teléfono: ${phone}
Servicio: ${service}

Mensaje:
${message}
      `,
            html: htmlBody,
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
