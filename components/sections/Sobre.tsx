export default function Sobre() {
  const stats = [
    { num: "19k+", label: "Seguidores" },
    { num: "5 ★",  label: "Avaliação" },
    { num: "369",  label: "Publicações" },
    { num: "+33",  label: "Anos" },
  ];

  return (
    <section id="sobre" className="py-20 px-6 bg-[#110500]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-[10px] uppercase tracking-[3px] text-[#8b1a1a] mb-2">
              Nossa História
            </p>
            <h2 className="font-display font-bold text-white leading-tight mb-3"
              style={{ fontSize: "clamp(26px,4vw,38px)" }}
            >
              A churrascaria que<br />
              <span className="text-[#d4a017]">para o trânsito</span>
            </h2>
            <div className="w-14 h-0.5 bg-[#d4a017] mb-5" />
            <p className="text-sm text-white/55 leading-[1.9] mb-4">
              A Churrascaria Viapiana é referência gastronômica em Araquari e região.
              Localizada na BR-280, atende famílias, grupos e eventos com qualidade,
              fartura e um atendimento acolhedor.
            </p>
            <p className="text-sm text-white/55 leading-[1.9] mb-7">
              Com mais de 19 mil seguidores no Instagram, 33 anos de história e dezenas de
              avaliações 5 estrelas, a Viapiana é a escolha certa para quem quer
              uma refeição inesquecível na região norte de Santa Catarina.
            </p>
            <a
              href="#contato"
              className="inline-block bg-[#d4a017] hover:bg-[#c49015] text-[#1a0a00] text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-sm transition-colors duration-200"
            >
              Conheça nossa história
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map(({ num, label }) => (
              <div
                key={label}
                className="bg-[#d4a017]/[0.07] border border-[#d4a017]/20 rounded p-5 text-center"
              >
                <p className="font-display font-bold italic text-[#d4a017] text-[34px] leading-none">
                  {num}
                </p>
                <p className="text-[10px] text-white/35 uppercase tracking-[2px] mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
