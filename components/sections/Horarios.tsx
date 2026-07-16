const horarios = [{ dia: "Todos os dias", hora: "11h – 14h" }];

export default function Horarios() {
  return (
    <section id="horarios" className="py-20 px-6 bg-[#8b1a1a]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display font-bold italic text-white text-[26px] mb-8">
          Horários de Funcionamento
        </h2>
        <div className="flex justify-center flex-wrap">
          {horarios.map(({ dia, hora }, i) => (
            <div
              key={dia}
              className={`px-10 py-0 ${
                i < horarios.length - 1
                  ? "border-r border-white/15 max-md:border-r-0 max-md:border-b max-md:py-4"
                  : "max-md:pt-4"
              }`}
            >
              <p className="text-[10px] uppercase tracking-[2px] text-white/55 mb-1.5">
                {dia}
              </p>
              <p className="font-display font-bold italic text-[#d4a017] text-[24px]">
                {hora}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
