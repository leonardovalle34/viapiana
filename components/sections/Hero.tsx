import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center text-center px-6 py-20 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 50%, #3d1a00 0%, #1a0a00 70%)",
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

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <p className="inline-block border border-[#d4a017] text-[#d4a017] text-[10px] px-5 py-1.5 rounded-full mb-6 uppercase tracking-[2px]">
          Espeto Corrido · Buffet livre · Eventos · Convênio com empresas
        </p>
        <div>
          <h1
            className="font-display font-bold text-white leading-[1.05] mb-4"
            style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
          >
            Seu dia pede
          </h1>
          <Image
            src="/images/logo-viapiana.png"
            alt="Viapiana"
            width={320}
            height={120}
            className="mx-auto w-150 h-auto object-contain mt-[-82px]"
          />
        </div>
        <p
          className="text-white/55 leading-[1.8] mb-9"
          style={{ fontSize: "clamp(14px, 2vw, 16px)" }}
        >
          A melhor churrascaria da regiao — espeto corrido, buffet completo,
          <br className="hidden md:block" />
          com sobremesas. Uma experiência inesquecível para toda a família.
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
