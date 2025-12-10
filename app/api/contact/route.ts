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

        const whatsappPhone = process.env.WHATSAPP_PHONE ?? "+56 9 7854 2840";
        const contactEmail =
            process.env.PUBLIC_CONTACT_EMAIL ?? "contacto@sambalab.pro";

        // 1) Correo interno (a ti)
        const internalPromise = transporter.sendMail({
            from: process.env.EMAIL_FROM,                 // <- ya sabemos que este funciona
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
            html: `
        <h2>Nuevo contacto desde Sambalab</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Servicio:</strong> ${service}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
        });

        // 2) Correo de confirmación (al cliente)
        const clientPromise = transporter.sendMail({
            from: process.env.EMAIL_FROM,                 // <- misMO from que arriba
            to: email,                                    // <- persona que llenó el formulario
            subject: "Hemos recibido tu mensaje – Sambalab",
            text: `
Hola ${name},

Gracias por escribirnos. Hemos recibido tu mensaje y ya lo estamos revisando.
En las próximas horas analizaremos tus requerimientos y prepararemos una propuesta
o las siguientes preguntas para afinar el alcance del proyecto.

Si necesitas contactarnos directamente, puedes hacerlo por:

- Email: ${contactEmail}
- WhatsApp: ${whatsappPhone}

Un abrazo,
Equipo Sambalab
      `,
            html: `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #111827;">
          <p>Hola ${name},</p>
          <p>
            Gracias por escribirnos. Hemos recibido tu mensaje y ya lo estamos revisando.
            En las próximas horas analizaremos tus requerimientos y prepararemos una propuesta
            o las siguientes preguntas para afinar el alcance del proyecto.
          </p>
          <p>Si necesitas contactarnos directamente, puedes hacerlo por:</p>
          <ul>
            <li><strong>Email:</strong> ${contactEmail}</li>
            <li><strong>WhatsApp:</strong> ${whatsappPhone}</li>
          </ul>
          <p>
            Un abrazo,<br/>
            <strong>Equipo Sambalab</strong>
          </p>
        </div>
      `,
        });

        // Ejecutar en paralelo y si algo falla, loguearlo
        await Promise.all([internalPromise, clientPromise]);

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Error sending email (internal or client):", error);
        return NextResponse.json(
            { ok: false, error: "Internal server error." },
            { status: 500 }
        );
    }
}
