import Image from "next/image";

export default function Whatsapp() {
    return (
        <a
            href="https://wa.me/5513988739188?text=Ol%C3%A1!!%0AVim%20do%20site%2C%20e%20gostaria%20de%20ser%20atendido(a)%20por%20aqui!!"
            className="fixed bottom-2 right-2 z-20 text-white w-10 h-10 md:w-15 md:h-15"
        >
            <Image
                src={'/wpp.svg'}
                height={120}
                width={120}
                alt="Whatsapp logo"
            />
        </a>
    )
}