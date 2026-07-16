import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Cardapio from "@/components/sections/Cardapio";
import Sobre from "@/components/sections/Sobre";
import Horarios from "@/components/sections/Horarios";
import Localizacao from "@/components/sections/Localizacao";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Cardapio />
        <Sobre />
        <Horarios />
        <Localizacao />
      </main>
      <Footer />
    </>
  );
}
