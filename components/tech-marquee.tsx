'use client'

import Marquee from 'react-fast-marquee'
import {
    FaReact, FaPython, FaAws, FaNodeJs, FaDocker, FaGithub, FaFigma, FaLinux
} from 'react-icons/fa'
import {
    SiNextdotjs, SiTypescript, SiTailwindcss, SiOpenai, SiSupabase, SiPostgresql, SiDjango, SiFastapi,
    SiGooglecloud, SiHeroku, SiFirebase, SiGooglegemini
} from 'react-icons/si'
import { VscAzure } from "react-icons/vsc";
import { useLanguage } from '@/context/language-context'

export default function TechMarquee() {
    const { t } = useLanguage()
    const technologies = [
        { name: 'React', icon: FaReact, url: 'https://react.dev/' },
        { name: 'Next.js', icon: SiNextdotjs, url: 'https://nextjs.org/' },
        { name: 'TypeScript', icon: SiTypescript, url: 'https://www.typescriptlang.org/' },
        { name: 'Python', icon: FaPython, url: 'https://www.python.org/' },
        { name: 'Django', icon: SiDjango, url: 'https://www.djangoproject.com/' },
        { name: 'FastAPI', icon: SiFastapi, url: 'https://fastapi.tiangolo.com/' },
        { name: 'OpenAI', icon: SiOpenai, url: 'https://openai.com/' },
        { name: 'Gemini', icon: SiGooglegemini, url: 'https://deepmind.google/technologies/gemini/' },
        { name: 'AWS', icon: FaAws, url: 'https://aws.amazon.com/' },
        { name: 'Google Cloud', icon: SiGooglecloud, url: 'https://cloud.google.com/' },
        { name: 'Azure', icon: VscAzure, url: 'https://azure.microsoft.com/' },
        { name: 'Docker', icon: FaDocker, url: 'https://www.docker.com/' },
        { name: 'Linux', icon: FaLinux, url: 'https://www.linux.org/' },
        { name: 'Heroku', icon: SiHeroku, url: 'https://www.heroku.com/' },
        { name: 'Firebase', icon: SiFirebase, url: 'https://firebase.google.com/' },
        { name: 'Node.js', icon: FaNodeJs, url: 'https://nodejs.org/' },
        { name: 'Tailwind', icon: SiTailwindcss, url: 'https://tailwindcss.com/' },
        { name: 'Supabase', icon: SiSupabase, url: 'https://supabase.com/' },
        { name: 'PostgreSQL', icon: SiPostgresql, url: 'https://www.postgresql.org/' },
        { name: 'Figma', icon: FaFigma, url: 'https://www.figma.com/' },
        { name: 'GitHub', icon: FaGithub, url: 'https://github.com/' },
    ]

    return (
        <section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6">
                <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest">
                    {t.techMarquee.title}
                </p>
            </div>

            <Marquee gradient={true} gradientColor="white" speed={40} pauseOnHover={true} autoFill={true}>
                {technologies.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center justify-center mx-8 group cursor-pointer">
                        <a
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center w-full h-full"
                        >
                            <tech.icon className="w-10 h-10 text-gray-300 group-hover:text-purple-600 transition-colors duration-300 mb-2" />
                            <span className="text-xs text-gray-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                {tech.name}
                            </span>
                        </a>
                    </div>
                ))}
            </Marquee>
        </section>
    )
}
