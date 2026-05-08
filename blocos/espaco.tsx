'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Espaco() {

    const imagens = [
        { id: 1, src: '/evento.webp', alt: 'Foto evento tema Neon' },
        { id: 2, src: '/evento2.webp', alt: 'Foto evento tema Barbie' },
        { id: 3, src: '/evento3.webp', alt: 'Foto evento 74 anos' }
    ]

    const [imagemAtual, setImagemAtual] = useState(imagens[0])

    useEffect(() => {
        const intervalo = setInterval(() => {
            setImagemAtual((prev) => {
                const proximoIndex = (imagens.findIndex(img => img.id === prev.id) + 1) % imagens.length;
                return imagens[proximoIndex];
            });
        }, 5000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <section id="espaco" className="my-10 relative">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/50 blur-[120px] -z-10" />

            <h2 className="text-center font-bold text-3xl uppercase tracking-widest text-[#d55f9c] mb-8">
                nosso espaço!</h2>

            <div className="grid grid-cols-1">
                {/* Carrosel */}
                <div className="relative mx-auto w-[70%] max-w-5xl aspect-3/4 my-3 overflow-hidden rounded-2xl shadow-2xl border border-white" >
                    {imagens.map((img) => (
                        <Image
                            key={img.id}
                            src={img.src}
                            fill
                            alt={img.alt}
                            sizes="(max-width: 1280px) 100vw, 1200px"
                            className={`object-cover absolute inset-0 duration-1000 ease-in-out ${img.id === imagemAtual.id ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                                }`}
                            priority={img.id === 1}
                        />
                    ))}
                </div>

                {/* Texto */}
                <p className="text-center text-white/80 font-sans text-xl max-w-[80%] mx-auto leading-relaxed">
                    Menus pensados para qualquer horario e ocasião!</p>
            </div>


        </section>
    )
}