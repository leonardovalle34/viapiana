const items = [
  "🔥 Espeto Corrido",
  "🍽️ Buffet Completo",
  "🍣 Sushi",
  "🍰 Sobremesas",
  "📍 BR-280, Araquari SC",
];

export default function TrustBar() {
  return (
    <div className="bg-[#8b1a1a] py-3.5 px-8 flex justify-center gap-9 flex-wrap">
      {items.map((item) => (
        <span
          key={item}
          className="text-xs text-white/88 uppercase tracking-wider"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
