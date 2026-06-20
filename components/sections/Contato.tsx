"use client";
import { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", tel: "", msg: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui entraria a integração com email/API
    setSent(true);
  };

  return (
    <section id="contato" className="py-20 px-6 bg-[#110500]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] uppercase tracking-[3px] text-[#8b1a1a] text-center mb-2">
          Fale Conosco
        </p>
        <h2
          className="font-display font-bold text-center text-white mb-2"
          style={{ fontSize: "clamp(26px,4vw,38px)" }}
        >
          Entre em <span className="text-[#d4a017]">contato</span>
        </h2>
        <div className="w-14 h-0.5 bg-[#d4a017] mx-auto mb-3" />
        <p className="text-sm text-white/45 text-center max-w-md mx-auto mb-12 leading-relaxed">
          Dúvidas, sugestões ou reservas para grupos? Fale com a gente.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info lado esquerdo */}
          <div>
            <h3 className="font-display font-bold italic text-white text-2xl mb-3">
              Estamos esperando por você
            </h3>
            <p className="text-sm text-white/50 mb-6 leading-[1.7]">
              Respondemos rapidamente pelo WhatsApp ou pelo formulário ao lado.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "📞 (47) 3452-2100",
                "📍 BR-280, Km 29 — Araquari, SC",
                "📷 @churrascariaviapiana",
                "🌐 churrascariavipiana.com.br",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 items-center text-sm text-white/65">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Formulário */}
          {sent ? (
            <div className="flex items-center justify-center border border-[#d4a017]/20 rounded p-10 text-center">
              <div>
                <p className="text-[#d4a017] font-display font-bold italic text-2xl mb-2">
                  Mensagem enviada!
                </p>
                <p className="text-sm text-white/50">
                  Entraremos em contato em breve.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
              <input
                type="text"
                placeholder="Seu nome"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="bg-white/[0.05] border border-white/12 rounded px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#d4a017] transition-colors"
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-white/[0.05] border border-white/12 rounded px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#d4a017] transition-colors"
              />
              <input
                type="tel"
                placeholder="WhatsApp"
                value={form.tel}
                onChange={(e) => setForm({ ...form, tel: e.target.value })}
                className="bg-white/[0.05] border border-white/12 rounded px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#d4a017] transition-colors"
              />
              <textarea
                placeholder="Sua mensagem..."
                rows={5}
                required
                value={form.msg}
                onChange={(e) => setForm({ ...form, msg: e.target.value })}
                className="bg-white/[0.05] border border-white/12 rounded px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#d4a017] transition-colors resize-vertical"
              />
              <button
                type="submit"
                className="bg-[#d4a017] hover:bg-[#c49015] text-[#1a0a00] font-bold uppercase tracking-wider text-sm py-4 rounded-sm transition-colors duration-200"
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
