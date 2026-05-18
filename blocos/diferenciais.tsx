import { PartyPopper, ParkingCircle, ChefHat, Crown, Baby, Building2 } from 'lucide-react'

export default function Diferenciais() {

    const diferenciais = [
        { id: 1, dif: `Espaço amplo e climatizado`, icon: <ChefHat size={70} color='white' /> },
        { id: 2, dif: `Buffet de alta gastronomia`, icon: <ParkingCircle size={70} color='white' /> },
        { id: 3, dif: `Decoração personalizada`, icon: <PartyPopper size={70} color='white' /> },
        { id: 4, dif: `Atendimento premium`, icon: <Crown size={70} color='white' /> },
        { id: 5, dif: `Espaço kids seguro`, icon: <Baby size={70} color='white' /> },
        { id: 6, dif: `Estrutura moderna`, icon: <Building2 size={70} color='white' /> },
    ]

    return (
        <section id="diferenciais" className="relative my-4 overflow-x-hidden overflow-y-visible ">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square h-full rounded-full bg-purple-600/30 -z-10"
                style={{ background: 'radial-gradient(circle, rgba(51,77,243,0.4) 0%, transparent 70%)' }}
            />

            <h2 className="text-center md:text-5xl font-bold text-3xl uppercase tracking-widest text-[#d55f9c] mb-8">
                Nossos diferenciais!</h2>

            {/* Container das bolhas */}
            <div className="flex flex-col sm:grid sm:grid-cols-3 w-full gap-4 sm:gap-1 md:gap-10 sm:w-[90%] sm:m-auto sm:pt-5">
                {diferenciais.map((d) => (
                    <div
                        key={d.id}
                        className={`w-[60%] sm:w-60 sm:text-xl p-3 border-2 border-blue-200 flex flex-col items-center justify-center rounded-4xl text-center bg-gray-950 mx-4 sm:mx-1 text-2xl md:w-full lg:text-3xl ${d.id !== 1 ? `-mt-7 sm:mt-0` : ``} ${d.id % 2 === 0 ? `self-start neon-azul` : `self-end neon-rosa`}`}
                    >
                        {d.icon}
                        <h3
                            className={d.id % 2 === 0 ? "text-blue-500" : "text-pink-500"}
                        >
                            {d.dif}
                        </h3>
                    </div>
                ))}
            </div>

        </section >
    )
}