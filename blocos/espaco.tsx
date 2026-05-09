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

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square h-[70%] rounded-full bg-purple-600/30 -z-10"
                style={{ background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, transparent 70%)' }}
            />
            <h2 className="text-center md:text-5xl font-bold text-3xl uppercase tracking-widest text-[#d55f9c] mb-8">
                nosso espaço!</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center">
                {/* Carrosel */}
                <div className="relative mx-auto w-[70%] max-w-5xl aspect-3/4 my-3 overflow-hidden rounded-2xl shadow-2xl border border-white md:max-w-150 md:mr-0 md:ml-auto" >
                    {imagens.map((img) => (
                        <Image
                            key={img.id}
                            src={img.src}
                            fill
                            alt={img.alt}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 1200px"
                            className={`object-cover absolute inset-0 duration-1000 ease-in-out ${img.id === imagemAtual.id ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                                }`}
                            fetchPriority={img.id === 1 ? "high" : "auto"}
                        />
                    ))}
                </div>

                {/* Texto */}
                <p className="sm:max-w-full md:text-3xl text-center text-white/80 sm:text-left font-sans text-xl max-w-[80%] mx-auto leading-relaxed sm:text-2xl md:w-100">
                    Um espaço amplo e versátil, perfeito para transformar qualquer celebração em uma festa inesquecível!</p>

            </div>


        </section>
    )
}