import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
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

        const contactEmail = process.env.PUBLIC_CONTACT_EMAIL ?? "contacto@sambalab.pro";

        // 1) Internal Notification
        const internalPromise = transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: "Nuevo suscriptor al Newsletter - Sambalab",
            text: `Nuevo suscriptor: ${email}`,
            html: `<p><strong>Nuevo suscriptor:</strong> ${email}</p>`,
        });

        // 2) Client Confirmation
        const clientPromise = transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: email,
            subject: "Bienvenido al Newsletter de Sambalab",
            text: `
Hola,

Gracias por suscribirte al newsletter de Sambalab.
Estaremos compartiendo contigo nuestras últimas ofertas y actualizaciones tecnológicas.

Si necesitas contactarnos: ${contactEmail}

Un abrazo,
Equipo Sambalab
            `,
            html: `
<div style="font-family: sans-serif; line-height: 1.6; color: #111;">
    <h2>¡Gracias por suscribirte!</h2>
    <p>Hola,</p>
    <p>Te damos la bienvenida al newsletter de <strong>Sambalab</strong>. A partir de ahora recibirás:</p>
    <ul>
        <li>Actualizaciones tecnológicas</li>
        <li>Nuestras últimas ofertas</li>
        <li>Novedades de la industria</li>
    </ul>
    <p>Si tienes alguna duda, escríbenos a ${contactEmail}.</p>
    <p>Un abrazo,<br/><strong>Equipo Sambalab</strong></p>
</div>
            `,
        });

        await Promise.all([internalPromise, clientPromise]);

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Error sending newsletter email:", error);
        return NextResponse.json(
            { ok: false, error: "Internal server error." },
            { status: 500 }
        );
    }
}
