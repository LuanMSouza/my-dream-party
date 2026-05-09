'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Menu() {

    const imagens = [
        { id: 1, src: '/menu1.webp', alt: 'Foto finger food' },
        { id: 2, src: '/menu2.webp', alt: 'Foto feijoada' },
        { id: 3, src: '/menu3.webp', alt: 'Foto cesta frutas' },
        { id: 4, src: '/menu4.webp', alt: 'Foto onion ring' },
        { id: 5, src: '/menu5.webp', alt: 'Foto mesa completa' }
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
        <section id="menu" className="my-10 relative">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square h-[70%] rounded-full bg-purple-600/30 -z-10"
                style={{ background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, transparent 70%)' }}
            />
            
            <h2 className="text-center font-bold text-3xl uppercase tracking-widest text-[#d55f9c] mb-8">
                nossos menus!</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center">

                {/* Carrosel */}
                <div className="relative  mx-auto w-[70%] max-w-5xl aspect-3/4 my-3 overflow-hidden rounded-2xl shadow-2xl border border-white  md:max-w-150 md:mr-0 md:ml-auto">
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
                <p className="sm:max-w-full sm:text-left sm:text-2xl text-center text-white/80 font-sans text-xl max-w-[80%] mx-auto leading-relaxed md:w-100">
                    Menus pensados para qualquer horario e ocasião!</p>

            </div>


        </section>
    )
}