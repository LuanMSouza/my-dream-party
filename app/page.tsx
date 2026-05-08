import Espaco from "@/blocos/espaco";
import Hero from "@/blocos/hero";
import Kids from "@/blocos/kids";
import Menu from "@/blocos/menu";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Espaco />
        <Kids />
        <Menu />
      </main>
    </>
  );
}
