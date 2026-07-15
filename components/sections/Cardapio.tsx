"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import CategoryButtons from "@/components/ui/CategoryButtons";

type CategoryId =
  | "buffet"
  | "espeto"
  | "sobremesas"
  | "horario"
  | "pizzas"
  | "carnes"
  | "ambiente";

const categoryData: Record<
  CategoryId,
  { title: string; images: { src: string; alt: string }[] }
> = {
  buffet: {
    title: "Buffet Completo",
    images: [
      {
        src: "/images/cardapio/buffet-01.png",
        alt: "Buffet de pratos quentes e acompanhamentos na Churrascaria Viapiana",
      },
      {
        src: "/images/cardapio/buffet-02.png",
        alt: "Farofa, massas e pratos do buffet Viapiana",
      },
      {
        src: "/images/cardapio/buffet-03.png",
        alt: "Saladas frescas do buffet da Churrascaria Viapiana",
      },
    ],
  },
  espeto: {
    title: "Espeto Corrido",
    images: [
      {
        src: "/images/cardapio/espeto0.png",
        alt: "Espetos corridos da Churrascaria Viapiana",
      },
      {
        src: "/images/cardapio/espeto1.png",
        alt: "Espetos corridos da Churrascaria Viapiana",
      },
      {
        src: "/images/cardapio/espeto2.png",
        alt: "Espetos corridos da Churrascaria Viapiana",
      },
      {
        src: "/images/cardapio/espeto3.png",
        alt: "Espetos corridos da Churrascaria Viapiana",
      },
      {
        src: "/images/cardapio/sushi-01.png",
        alt: "Bandejas de sushi e uramaki da Churrascaria Viapiana",
      },
      {
        src: "/images/cardapio/sushi-02.png",
        alt: "Variedade de rolinhos e niguiri da Viapiana",
      },
      {
        src: "/images/cardapio/sushi-03.png",
        alt: "Mesa de sushi fresco preparado diariamente",
      },
    ],
  },
  sobremesas: {
    title: "Sobremesas",
    images: [
      {
        src: "/images/cardapio/sobremesas-01.png",
        alt: "Sobremesas variadas com pudim e mousse na Viapiana",
      },
      {
        src: "/images/cardapio/sobremesas-02.png",
        alt: "Pudim caseiro e pavê da Churrascaria Viapiana",
      },
      {
        src: "/images/cardapio/sobremesas-03.png",
        alt: "Calda de frutas vermelhas e doces artesanais",
      },
      {
        src: "/images/cardapio/sobremesas-04.png",
        alt: "Banana flambada com sorvete — sobremesa especial Viapiana",
      },
    ],
  },
  horario: {
    title: "Horários de Funcionamento",
    images: [
      {
        src: "/images/cardapio/horario-01.png",
        alt: "Horário de funcionamento da Churrascaria Viapiana — abertos todos os dias das 11h às 14h",
      },
    ],
  },
  pizzas: {
    title: "Pizzas Doces",
    images: [
      {
        src: "/images/cardapio/pizzas-01.png",
        alt: "Pizza doce de morango com coco ralado da Viapiana",
      },
      {
        src: "/images/cardapio/pizzas-02.png",
        alt: "Pizza doce com brigadeiro, coco e granulado colorido",
      },
    ],
  },
  carnes: {
    title: "Nossas Carnes",
    images: [
      {
        src: "/images/cardapio/carnes-05.png",
        alt: "Churrasqueira com espetos de carnes na brasa da Viapiana",
      },
      {
        src: "/images/cardapio/carnes-02.png",
        alt: "Churrasqueiro preparando espetos na Churrascaria Viapiana",
      },
      {
        src: "/images/cardapio/carnes-03.png",
        alt: "Espeto de picanha suculento levantado pelo assador",
      },
      {
        src: "/images/cardapio/carnes-04.png",
        alt: "Costela no espeto e carnes nobres na brasa",
      },
    ],
  },
  ambiente: {
    title: "Nosso Ambiente",
    images: [
      {
        src: "/images/cardapio/ambiente-01.png",
        alt: "Interior da Churrascaria Viapiana com buffet e logotipo iluminado",
      },
      {
        src: "/images/cardapio/ambiente-02.png",
        alt: "Salão da Churrascaria Viapiana cheio de clientes",
      },
    ],
  },
};

export default function Cardapio() {
  const [selected, setSelected] = useState<CategoryId | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  const data = selected ? categoryData[selected] : null;
  const total = data?.images.length ?? 0;

  const close = useCallback(() => {
    setSelected(null);
    setImgIndex(0);
  }, []);

  const prev = useCallback(
    () => setImgIndex((i) => (i - 1 + total) % total),
    [total],
  );
  const next = useCallback(() => setImgIndex((i) => (i + 1) % total), [total]);

  // Keyboard nav + scroll lock
  useEffect(() => {
    if (!selected) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [selected, close, prev, next]);

  const handleSelect = (id: string) => {
    setSelected(id as CategoryId);
    setImgIndex(0);
  };

  return (
    <section id="cardapio" className="py-20 px-6 bg-[#1a0a00]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[10px] uppercase tracking-[3px] text-[#8b1a1a] text-center mb-2">
          Nosso Cardápio
        </p>
        <h2
          className="font-display font-bold text-center text-white mb-2"
          style={{ fontSize: "clamp(26px,4vw,38px)" }}
        >
          Uma <span className="text-[#d4a017]">experiência completa</span>
        </h2>
        <div className="w-14 h-0.5 bg-[#d4a017] mx-auto mb-3" />
        <p className="text-sm text-white/45 text-center max-w-md mx-auto mb-10 leading-relaxed">
          Clique em uma categoria para ver as fotos
        </p>

        <div className="bg-[#0d0400] rounded-2xl py-6 px-4 overflow-x-auto">
          <CategoryButtons onSelect={handleSelect} />
        </div>
      </div>

      {/* ── MODAL ── */}
      {selected && data && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={data.title}
        >
          <div
            className="relative w-full max-w-3xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="w-full flex items-center justify-between mb-4 px-1">
              <h3 className="font-display font-bold italic text-[#d4a017] text-2xl">
                {data.title}
              </h3>
              <button
                onClick={close}
                aria-label="Fechar"
                className="text-white/60 hover:text-white transition-colors p-1"
              >
                <X size={28} />
              </button>
            </div>

            {/* Image */}
            <div
              className="relative w-full rounded-lg overflow-hidden bg-[#0d0400]"
              style={{ aspectRatio: "2/2" }}
            >
              <Image
                key={data.images[imgIndex].src}
                src={data.images[imgIndex].src}
                alt={data.images[imgIndex].alt}
                fill
                className="object-container"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />

              {/* Prev / Next — só se tiver mais de 1 imagem */}
              {total > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Imagem anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Próxima imagem"
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Dots */}
            {total > 1 && (
              <div className="flex gap-2 mt-4">
                {data.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    aria-label={`Ir para imagem ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      i === imgIndex
                        ? "bg-[#d4a017] scale-125"
                        : "bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Counter */}
            {total > 1 && (
              <p className="text-white/30 text-xs mt-2">
                {imgIndex + 1} / {total}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
