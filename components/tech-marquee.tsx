'use client'

import Marquee from 'react-fast-marquee'
import {
    FaReact, FaPython, FaAws, FaNodeJs, FaDocker, FaGithub, FaFigma
} from 'react-icons/fa'
import {
    SiNextdotjs, SiTypescript, SiTailwindcss, SiOpenai, SiSupabase, SiPostgresql, SiDjango, SiFastapi
} from 'react-icons/si'
import { useLanguage } from '@/context/language-context'

export default function TechMarquee() {
    const { t } = useLanguage()
    const technologies = [
        { name: 'React', icon: FaReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Python', icon: FaPython },
        { name: 'Django', icon: SiDjango },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'OpenAI', icon: SiOpenai },
        { name: 'AWS', icon: FaAws },
        { name: 'Docker', icon: FaDocker },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Tailwind', icon: SiTailwindcss },
        { name: 'Supabase', icon: SiSupabase },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Figma', icon: FaFigma },
        { name: 'GitHub', icon: FaGithub },
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
                    <div key={index} className="flex flex-col items-center justify-center mx-8 group cursor-default">
                        <tech.icon className="w-10 h-10 text-gray-300 group-hover:text-purple-600 transition-colors duration-300 mb-2" />
                        <span className="text-xs text-gray-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </Marquee>
        </section>
    )
}
