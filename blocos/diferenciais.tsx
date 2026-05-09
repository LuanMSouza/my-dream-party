export default function Diferenciais() {

    const diferenciais = [
        { id: 1, dif: `Dif 1`, desc: `Descrição do diferencial 1` },
        { id: 2, dif: `Dif 2`, desc: `Descrição do diferencial 2` },
        { id: 3, dif: `Dif 3`, desc: `Descrição do diferencial 3` },
        { id: 4, dif: `Dif 4`, desc: `Descrição do diferencial 4` },
    ]

    return (
        <section id="diferenciais" className="relative my-4 overflow-hidden">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square h-full rounded-full bg-purple-600/30 -z-10"
                style={{ background: 'radial-gradient(circle, rgba(51,77,243,0.4) 0%, transparent 70%)' }}
            />  

            <h2 className="text-center font-bold text-3xl uppercase tracking-widest text-[#d55f9c] mb-8">
                Nossos diferenciais</h2>

            {/* Container das bolhas */}
            <div className="flex flex-col md:gap-10 sm:flex-row sm:gap-1 w-full gap-4 sm:w-[90%] sm:m-auto sm:pt-5">

                {diferenciais.map((d) => {
                    return (
                        <div key={d.id} className={`aspect-square w-[60%]  sm:w-full p-3 border-2 border-blue-200 flex flex-col items-center justify-center rounded-full  text-center bg-gray-950 text-2xl mx-4 sm:mx-1 ${d.id !== 1 ? `-mt-7` : ``} ${d.id % 2 === 0 ? `self-start neon-azul` : `self-end neon-rosa`}`}>
                            <h3 className={d.id % 2 === 0 ? "text-blue-500" : "text-pink-500"} >{d.dif}</h3>
                            <p className="text-white text-base">{d.desc}</p>
                        </div>
                    )
                })}



            </div>

        </section >
    )
}