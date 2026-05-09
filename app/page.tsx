import dynamic from 'next/dynamic'

import Diferenciais from "@/blocos/diferenciais";
import Espaco from "@/blocos/espaco";
import Footer from "@/blocos/footer";
import Hero from "@/blocos/hero";

const Kids = dynamic(() => import('@/blocos/kids'))
const Menu = dynamic(() => import('@/blocos/menu'))

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Espaco />
        <Kids />
        <Menu />
        <Diferenciais />
        <Footer />
      </main>
    </>
  );
}
