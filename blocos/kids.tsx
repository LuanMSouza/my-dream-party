'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Kids() {

    const imagens = [
        { id: 1, src: '/kids1.webp', alt: 'Foto Simuladores' },
        { id: 2, src: '/kids2.webp', alt: 'Foto parte superior' },
        { id: 3, src: '/kids3.webp', alt: 'Foto escorregador' },
        { id: 4, src: '/kids4.webp', alt: 'Foto casinhas' }
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
        <section id="kids" className="my-10 relative">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square h-[70%] rounded-full bg-purple-600/30 -z-10"
                style={{ background: 'radial-gradient(circle, rgba(51,77,243,0.4) 0%, transparent 70%)' }}
            />
            <h2 className="text-center font-bold text-3xl uppercase tracking-widest text-[#d55f9c] mb-8">
                Espaço kids!
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 sm:[direction:rtl] sm:gap-0  justify-center items-center ">
                {/* Carrosel */}
                <div className=" md:max-w-150 md:ml-0 md:mr-auto relative mx-auto w-[70%] max-w-5xl aspect-3/4 my-3 overflow-hidden rounded-2xl shadow-2xl border border-white">
                    {imagens.map((img) => (
                        <Image
                            key={img.id}
                            src={img.src}
                            fill
                            alt={img.alt}
                            sizes="(max-width: 1280px) 100vw, 1200px"
                            className={`object-cover absolute inset-0 duration-1000 ease-in-out ${img.id === imagemAtual.id ? 'opacity-100 scale-100' : 'scale-110 opacity-0'
                                }`}
                            priority={img.id === 1}
                        />
                    ))}
                </div>

                {/* Texto */}
                <p className="text-center sm:text-right w-full sm:max-w-full text-white/80 font-sans text-xl max-w-[80%] mx-auto leading-relaxed sm:text-2xl md:w-100">
                    Uma área completa, cheia dos mais diversos tipos de atividades para os pequenos
                </p>
            </div>


        </section>
    )
}