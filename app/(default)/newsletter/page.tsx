"use client";

import { useState } from "react";
import { useLanguage } from '@/context/language-context';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function NewsletterPage() {
    const { t } = useLanguage();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrorMessage(t.newsletter.validation.emailInvalid);
            setStatus("error");
            return;
        }

        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok || !data.ok) {
                throw new Error(data.error || "Failed to subscribe");
            }

            setStatus("success");
            setEmail("");
        } catch (error) {
            console.error(error);
            setStatus("error");
            setErrorMessage(t.newsletter.errorMessage);
        }
    };

    return (
        <section className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-20 md:pt-40 md:pb-28">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-purple-100/50 -skew-y-3 transform origin-top-left -z-10" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="grid md:grid-cols-2">

                        {/* Content Side */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h1 className="h2 font-playfair mb-4 text-gray-900 leading-tight">
                                {t.newsletter.title}
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {t.newsletter.subtitle}
                            </p>

                            {status === "success" ? (
                                <div className="bg-green-50 rounded-xl p-6 text-center border border-green-100 animate-fade-in-up">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                                        <FaCheckCircle className="text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t.newsletter.success}</h3>
                                    <p className="text-gray-600">{t.newsletter.successMessage}</p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-6 text-sm font-semibold text-green-700 hover:text-green-800 underline"
                                    >
                                        Suscribir otro correo
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email</label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                className={`form-input w-full pl-4 pr-12 py-3 rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500 transition-colors ${status === 'error' ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
                                                placeholder={t.newsletter.emailPlaceholder}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                disabled={status === "loading"}
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                                            </div>
                                        </div>
                                        {status === 'error' && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1 animate-shake">
                                                <FaExclamationCircle /> {errorMessage}
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className={`btn w-full text-white bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 ${status === 'loading' ? 'opacity-75 cursor-wait' : ''}`}
                                    >
                                        {status === "loading" ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                                {t.newsletter.subscribing}
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center gap-2">
                                                {t.newsletter.subscribeButton} <FaPaperPlane className="text-sm" />
                                            </span>
                                        )}
                                    </button>
                                    <p className="text-xs text-center text-gray-400 mt-4">
                                        Nunca compartiremos tu correo. Sin spam, prometido.
                                    </p>
                                </form>
                            )}
                        </div>

                        {/* Visual Side */}
                        <div className="hidden md:block bg-purple-600 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-700 mixture-multiply" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                <svg className="w-64 h-64 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center bg-black/10 backdrop-blur-sm">
                                <p className="font-playfair text-xl italic">"La tecnología es mejor cuando une a las personas."</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
