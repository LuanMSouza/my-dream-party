import Image from "next/image";


export default function Hero() {

    return (
        <section>
            {/* Logo */}
            <div className="w-full  flex justify-center relative my-5 ">
                <Image
                    src={'/logo.webp'}
                    height={200}
                    width={200}
                    loading="eager"
                    alt="Logo My Dream Party"
                    className="bg-gray-950 rounded-full z-10 "
                    priority
                    sizes="(max-width: 640px) 100vw, 200px"
                />

                <div className="h-50 w-50 rounded-full border-10 border-t-blue-300 border-l-green-400 border-r-pink-400 border-b-yellow-400 
                blur absolute z-0 animate-spin" />
            </div>

            {/* SEO */}
            <h1 className="hidden">My Dream Party - santos/sp</h1>

            {/* Texto */}
            <p className="text-xl text-center text-white --font-orbitron my-10 sm:text-3xl">
                Transformamos <span className="text-pink-400">sonhos</span>
                <br />
                em festas <span className="text-blue-400">inesquecíveis</span>
            </p>

            {/* NavBar */}
            <nav className="neon md:px-40 shadow-blue bg-gray-950 border-y-2 border-blue-300 grid grid-cols-2 text-center gap-y-3 py-3 font-arial text-white font-sans text-xl sm:grid-cols-4">
                <a href="#espaco">Espaço</a>
                <a href="#kids">Espaço <span className="text-pink-300">Kids</span></a>
                <a href="#menu">Menu</a>
                <a href="#diferenciais">Diferenciais</a>
            </nav>

        </section>
    )
}