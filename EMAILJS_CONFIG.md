# Configuración de EmailJS para el Formulario de Contacto

## Paso 1: Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita (permite 200 emails/mes)
3. Verifica tu email

## Paso 2: Configurar el servicio de email

1. En el dashboard de EmailJS, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. **Copia el Service ID** (lo necesitarás después)

## Paso 3: Crear plantilla de email

1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Configura la plantilla con el siguiente contenido:

**Subject:**
```
Nuevo contacto desde Sambalab - {{from_name}}
```

**Content:**
```
Has recibido un nuevo mensaje de contacto desde el sitio web de Sambalab.

Nombre: {{from_name}}
Empresa: {{from_company}}
Email: {{from_email}}
Teléfono: {{from_phone}}
Tipo de servicio: {{service_type}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de sambalab.pro
```

4. **Copia el Template ID**

## Paso 4: Obtener Public Key

1. Ve a **Account** > **General**
2. En la sección **API Keys**, encontrarás tu **Public Key**
3. **Copia el Public Key**

## Paso 5: Configurar las credenciales en el código

Abre el archivo `/components/contacto.tsx` y reemplaza los siguientes valores en la línea ~70:

```typescript
await emailjs.send(
  "YOUR_SERVICE_ID",    // Reemplazar con tu Service ID
  "YOUR_TEMPLATE_ID",   // Reemplazar con tu Template ID
  {
    from_name: formData.name,
    from_company: formData.company,
    from_email: formData.email,
    from_phone: formData.phone,
    service_type: formData.service,
    message: formData.message,
    to_email: "dgr@sambalab.pro",
  },
  "YOUR_PUBLIC_KEY"     // Reemplazar con tu Public Key
);
```

## Paso 6: Probar el formulario

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Abre el navegador en `http://localhost:3000`

3. Navega hasta la sección de contacto (al final de la página)

4. Llena el formulario y envía un mensaje de prueba

5. Verifica que recibas el email en dgr@sambalab.pro

## Notas importantes

- **Límite gratuito**: 200 emails/mes
- **Seguridad**: Las credenciales están en el código del cliente, lo cual es seguro con EmailJS ya que tienen protección anti-spam
- **Alternativa**: Si necesitas más emails o prefieres una solución backend, considera usar:
  - Resend (https://resend.com)
  - SendGrid (https://sendgrid.com)
  - Nodemailer con tu propio servidor SMTP

## Solución de problemas

### El email no llega
- Verifica que las credenciales sean correctas
- Revisa la consola del navegador para ver errores
- Verifica la carpeta de spam
- Revisa el dashboard de EmailJS para ver el historial de envíos

### Error de CORS
- Asegúrate de estar usando el Public Key correcto
- Verifica que el dominio esté permitido en la configuración de EmailJS

### El formulario no se envía
- Abre la consola del navegador (F12)
- Busca mensajes de error en rojo
- Verifica que todos los campos estén llenos correctamente
