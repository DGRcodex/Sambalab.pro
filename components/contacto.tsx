"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contacto() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Nombre requerido";
    if (!formData.company.trim()) newErrors.company = "Empresa requerida";
    if (!formData.email.trim()) {
      newErrors.email = "Email requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.phone.trim()) newErrors.phone = "Teléfono requerido";
    if (!formData.service) newErrors.service = "Selecciona un servicio";
    if (!formData.message.trim()) newErrors.message = "Mensaje requerido";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");

    try {
      // IMPORTANTE: Debes configurar tu cuenta de EmailJS y reemplazar estos valores
      // 1. Crea una cuenta en https://www.emailjs.com/
      // 2. Crea un servicio de email
      // 3. Crea una plantilla de email
      // 4. Obtén tu Public Key desde Account > API Keys

      await emailjs.send(
        "YOUR_SERVICE_ID", // Reemplazar con tu Service ID
        "YOUR_TEMPLATE_ID", // Reemplazar con tu Template ID
        {
          from_name: formData.name,
          from_company: formData.company,
          from_email: formData.email,
          from_phone: formData.phone,
          service_type: formData.service,
          message: formData.message,
          to_email: "dgr@sambalab.pro",
        },
        "YOUR_PUBLIC_KEY" // Reemplazar con tu Public Key
      );

      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const whatsappNumber = "56978542840";
  const whatsappMessage = encodeURIComponent(
    "Hola! Me gustaría obtener más información sobre sus servicios de desarrollo."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50" id="contacto">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-14 border-t border-gray-200">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-10" data-aos="fade-up">
            <h2 className="h1 mb-4 text-black font-playfair text-5xl sm:text-6xl lg:text-7xl font-normal">
              Conversemos
            </h2>
            <p className="text-xl text-gray-600">
              ¿Tienes un proyecto en mente? Cuéntanos cómo podemos ayudarte a llevarlo a producción.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Contact Info & WhatsApp */}
              <div className="space-y-6" data-aos="fade-right">
                {/* Info Cards */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    ¿Por qué elegirnos?
                  </h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                      <span>MVPs en producción en días, no meses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                      <span>Arquitectura escalable desde el inicio</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                      <span>Integración de IA en procesos reales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                      <span>Soporte técnico cercano y continuo</span>
                    </li>
                  </ul>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <FaWhatsapp className="text-3xl" />
                  <div className="text-left">
                    <div className="text-sm opacity-90">Chatea con nosotros</div>
                    <div className="text-lg font-bold">WhatsApp</div>
                  </div>
                </a>

                <div className="text-center text-gray-500 text-sm">
                  <p>Respondemos en minutos</p>
                </div>
              </div>

              {/* Contact Form */}
              <div
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
                data-aos="fade-left"
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${errors.name ? "border-red-400" : "border-gray-200"
                        } text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                      placeholder="Juan Pérez"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${errors.company ? "border-red-400" : "border-gray-200"
                        } text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                      placeholder="Tu Empresa S.A."
                    />
                    {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${errors.email ? "border-red-400" : "border-gray-200"
                        } text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                      placeholder="contacto@empresa.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${errors.phone ? "border-red-400" : "border-gray-200"
                        } text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                      placeholder="+56 9 1234 5678"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Service Type */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de servicio *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${errors.service ? "border-red-400" : "border-gray-200"
                        } text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                    >
                      <option value="" className="bg-white">Selecciona un servicio</option>
                      <option value="desarrollo-web" className="bg-white">Desarrollo Web</option>
                      <option value="desarrollo-movil" className="bg-white">Desarrollo Móvil</option>
                      <option value="integracion-ia" className="bg-white">Integración de IA</option>
                      <option value="consultoria" className="bg-white">Consultoría Técnica</option>
                      <option value="mvp" className="bg-white">MVP / Prototipo</option>
                      <option value="otro" className="bg-white">Otro</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Cuéntanos sobre tu proyecto *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${errors.message ? "border-red-400" : "border-gray-200"
                        } text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none`}
                      placeholder="Describe tu proyecto, objetivos y timeline..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${status === "loading"
                        ? "bg-purple-400 cursor-not-allowed"
                        : status === "success"
                          ? "bg-green-500"
                          : status === "error"
                            ? "bg-red-500"
                            : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-105"
                      }`}
                  >
                    {status === "loading" && (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Enviando...
                      </>
                    )}
                    {status === "success" && (
                      <>
                        <FaCheckCircle />
                        ¡Mensaje enviado!
                      </>
                    )}
                    {status === "error" && <>Error al enviar. Intenta de nuevo.</>}
                    {status === "idle" && (
                      <>
                        <FaPaperPlane />
                        Enviar mensaje
                      </>
                    )}
                  </button>

                  {status === "success" && (
                    <p className="text-green-600 text-sm text-center">
                      Gracias por contactarnos. Te responderemos pronto.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
