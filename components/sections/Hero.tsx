import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center text-center px-6 py-20 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 30% 50%, #3d1a00 0%, #1a0a00 70%)",
      }}
    >
      {/* Glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,160,23,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Espeto image — decorativo, posição absoluta à direita */}
      <div className="absolute right-0 bottom-0 h-full w-[40%] max-w-[480px] pointer-events-none hidden lg:block">
        <Image
          src="/images/espeto-viapiana.png"
          alt="Espeto de carne na brasa — Churrascaria Viapiana"
          fill
          priority
          className="object-contain object-right-bottom opacity-80"
          sizes="40vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <p className="inline-block border border-[#d4a017] text-[#d4a017] text-[10px] px-5 py-1.5 rounded-full mb-6 uppercase tracking-[2px]">
          Espeto Corrido · À La Carte · Araquari, SC
        </p>

        <h1 className="font-display font-bold text-white leading-[1.05] mb-4"
          style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
        >
          Seu dia pede<br />
          <span className="text-[#d4a017]">Viapiana.</span>
        </h1>

        <p className="text-white/55 leading-[1.8] mb-9"
          style={{ fontSize: "clamp(14px, 2vw, 16px)" }}
        >
          A melhor churrascaria de Araquari — espeto corrido, buffet completo,
          <br className="hidden md:block" />
          sushi e sobremesas. Uma experiência inesquecível para toda a família.
        </p>

        <div className="flex gap-3.5 justify-center flex-wrap">
          <a
            href="#cardapio"
            className="bg-[#d4a017] hover:bg-[#c49015] text-[#1a0a00] font-bold uppercase tracking-wider text-sm px-8 py-3.5 rounded-sm transition-colors duration-200"
          >
            Ver Cardápio
          </a>
          <a
            href="#localizacao"
            className="bg-transparent border border-white/40 hover:border-[#d4a017] hover:text-[#d4a017] text-white uppercase tracking-wider text-sm px-8 py-3.5 rounded-sm transition-colors duration-200"
          >
            Como Chegar
          </a>
        </div>
      </div>
    </section>
  );
}
