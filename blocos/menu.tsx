'use client'
import { useEffect, useState } from "react";

export default function Menu() {

    const menu = [
        {
            id: 1,
            nome: 'Menu Week',
            observacao: true,
            itens: [
                'Entradinhas Finger Food (2 variedades)',
                'Salgados Fritos e Assados (12 variedades)',
                'Kids (4 variedades)',
                'Prato Quente (Penne na manteiga, molho sugo e branco, isca de frango e salada verde)',
                'Bolo com sorvete de creme',
                'Doces',
                'Bebidas não alcoólicas',
            ]
        },
        {
            id: 2,
            nome: 'Menu SKY',
            observacao: true,
            itens: [
                'Entradinhas Finger Food (3 variedades)',
                'Salgados Fritos e Assados (15 variedades)',
                'Kids (4 variedades)',
                'Prato Quente (Massa recheada, molho sugo e branco, isca de frango ou Strogonoff de frango, acompanhamentos.Salada verde e penne na manteiga)',
                'Bolo com sorvete de creme',
                'Doces',
                'Bebidas não alcoólicas',
            ]
        },
        {
            id: 3,
            nome: 'Menu Star',
            observacao: false,
            itens: [
                'Entradinhas Finger Food (3 variedades)',
                'Salgados Fritos e Assados (20 variedades)',
                'Kids (6 variedades)',
                'Mesa Gastronômica STAR',
                'Prato Quente (Filé Mignon + Acompanhamentos ou Filé de peixe com molho de camarão + Acompanhamentos. Salada Verde e Penne na Manteiga))',
                'Bolo com sorvete de creme',
                'Doces',
                'Bebidas não alcoólicas',
            ]
        },
        {
            id: 4,
            nome: 'Menu Dream',
            observacao: false,
            itens: [
                'Entradinhas Finger Food (4 variedades)',
                'Salgados Fritos e Assados (20 variedades)',
                'Kids (6 variedades)',
                'Mesa Gastronômica DREAM',
                'Prato Quente (Medalhão de Mignon + acompanhamentos ou Filé de Abadejo com camarão + Acompanhamentos ou Salmão Molho Maracujá + Acompanhamentos. Penne na Manteiga e Salada Verde)',
                'Bolo com sorvete de creme',
                'Doces',
                'Bebidas não alcoólicas',
            ]
        }, {
            id: 5,
            nome: 'Menu Feijoada',
            observacao: false,
            itens: [
                'Entradinhas Finger Food (3 variedades)',
                'Salgados Fritos e Assados (10 variedades)',
                'Kids (4 variedades)',
                'Mesa Petiscos completa',
                'Feijoada completa',
                'Feijoada Light com itens separados',
                'Acompanhamentos da Feijoada',
                'Penne na Manteiga',
                'Bolo com sorvete de creme',
                'Doces',
                'Bebidas não alcoólicas',
            ]
        },
    ]



    return (
        <section id="menu" className="my-10 relative overflow-x-hidden">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square h-[70%] rounded-full bg-purple-600/30 -z-10"
                style={{ background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, transparent 70%)' }}
            />

            <h2 className="text-center font-bold text-3xl md:text-5xl uppercase tracking-widest text-[#d55f9c] mb-8">
                nossos menus!</h2>
            <div className="flex flex-wrap justify-center w-[90%] m-auto justify-items-center gap-5">

                {
                    menu.map((m) => {
                        return (
                            <div className="text-white w-75 sm:w-100 border bg-black/60 p-3 rounded-2xl relative " key={m.id}>
                                <p className="text-center text-3xl">{m.nome}</p>

                                {m.itens.map((i) => {
                                    return (
                                        <p className="text-base mt-4 font-sans"> - {i}</p>
                                    )
                                })}

                                {m.observacao ? <p className="absolute top-2 right-2 text-2xl">*</p> : ''}

                                {m.observacao ?
                                    <p className=" text-sm text-center mt-3 font-sans text-gray-300">
                                        * Menu não válido para 15 anos, casamentos e bodas
                                    </p> : ''}

                            </div>
                        )
                    })
                }
            </div>


        </section>
    )
}