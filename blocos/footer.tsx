import Image from "next/image"

export default function Footer() {
    return (
        <>
            <footer className=" bg-gray-950  text-white px-8 grid grid-cols-1 sm:grid-cols-2 sm:py-4">

                <div className="relative h-full ">
                    <Image
                        src="/logo.webp"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 200px, 250px"
                        alt="Logo My Dream Party"
                    />
                </div>

                <div className="flex flex-col gap-4 justify-center w-full">
                    <a
                        href="https://maps.google.com/?q=My+Dream+Party+Buffet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        <i className="ti ti-map-pin" aria-hidden="true" />
                        Ver no Google Maps
                    </a>

                    <a
                        href="https://www.instagram.com/mydreampartybuffet/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-base text-pink-400 hover:text-pink-300 transition-colors"
                    >
                        @mydreampartybuffet
                    </a>

                    <p className="text-gray-200 text-sm">
                        © {new Date().getFullYear()} My Dream Party Buffet. Todos os direitos reservados.
                    </p>
                </div>

            </footer >
            <p className="text-gray-500  mt-1 text-center w-full col-span-full">
                My Dream Party Buffet é um buffet infantil em Santos/SP, na Ponta da Praia. Realizamos festas infantis, aniversários e eventos com estrutura completa.
            </p>
        </>
    )
}