import Image from "next/image"
import Link from "next/link"

export default function CTA() {
    return (
        <section className="relative my-16 ">

            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[60%] rounded-full -z-10"
                style={{ background: 'radial-gradient(circle, rgba(213,95,156,0.25) 0%, transparent 70%)' }}
            />

            <div className="flex flex-col items-center text-center gap-6 px-6 py-16">

                <p className="text-white/50 uppercase tracking-[0.3em] text-sm font-sans">
                    Seu evento começa aqui
                </p>

                <h2 className="font-bold text-3xl sm:text-5xl uppercase tracking-widest"
                    style={{ textShadow: '0 0 20px rgba(213,95,156,0.6)' }}>
                    <span className="text-[#d55f9c]">Realize</span> a festa{" "}
                    <span className="text-blue-400" style={{ textShadow: '0 0 20px rgba(96,165,250,0.6)' }}>
                        dos seus sonhos
                    </span>
                </h2>

                <p className="text-white/60 font-sans text-lg max-w-md leading-relaxed">
                    Entre em contato agora e descubra como podemos tornar esse momento inesquecível.
                </p>

                <Link
                    href="https://wa.me/5513988739188?text=Ol%C3%A1!!%0AVim%20do%20site%2C%20e%20gostaria%20de%20ser%20atendido(a)%20por%20aqui!!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-3 px-8 py-4 rounded-full border border-green-400 text-green-400 font-bold text-lg uppercase tracking-widest transition-all duration-300 hover:bg-green-400/10"
                    style={{ boxShadow: '0 0 16px rgba(74,222,128,0.3)' }}
                >
                    <Image src="/wpp.svg" alt="WhatsApp" width={24} height={24} />
                    Fale Conosco
                </Link>

            </div>
        </section>
    )
}