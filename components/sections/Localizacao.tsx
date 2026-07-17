export default function Localizacao() {
  const MAPS_URL =
    "https://www.google.com/maps/place/Churrascaria+Viapiana/@-26.406669,-48.748671,1383m/data=!3m1!1e3!4m6!3m5!1s0x94deca9cbab39593:0x15bf1000228fb9be!8m2!3d-26.4066694!4d-48.7486714!16s%2Fg%2F1tgkjfm7?hl=en&entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D";
  const WPP_URL =
    "https://wa.me/554734522100?text=Olá%2C+gostaria+de+fazer+uma+reserva!";

  return (
    <section
      id="localizacao"
      className="py-20 px-6 bg-[#1a0a00] border-t-2 border-[#8b1a1a]"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] uppercase tracking-[3px] text-[#8b1a1a] text-center mb-2">
          Localização
        </p>
        <h2
          className="font-display font-bold text-center text-white mb-2"
          style={{ fontSize: "clamp(26px,4vw,38px)" }}
        >
          Venha nos <span className="text-[#d4a017]">visitar</span>
        </h2>
        <div className="w-14 h-0.5 bg-[#d4a017] mx-auto mb-3" />
        <p className="text-sm text-white/45 text-center max-w-md mx-auto mb-12 leading-relaxed">
          Estamos na BR-280, de fácil acesso para toda a região.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Mapa embed */}
          <div className="rounded overflow-hidden border border-[#d4a017]/20 h-[280px]">
            <iframe
              title="Localização Churrascaria Viapiana no Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.505166240964!2d-48.75124632525272!3d-26.406664572249113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deca9cbab39593%3A0x15bf1000228fb9be!2sChurrascaria%20Viapiana!5e1!3m2!1sen!2sbr!4v1784246585192!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <address className="not-italic">
            <dl className="flex flex-col gap-3 text-sm text-white/60 leading-[1.7] mb-6">
              <div>
                <dt className="text-[#d4a017] font-semibold text-xs uppercase tracking-wider mb-0.5">
                  Endereço
                </dt>
                <dd>
                  Rodovia BR-280, nº 3177 (Km 29)
                  <br />
                  Porto Grande — Araquari, SC
                </dd>
              </div>
              <div>
                <dt className="text-[#d4a017] font-semibold text-xs uppercase tracking-wider mb-0.5">
                  Telefone
                </dt>
                <dd>
                  <a
                    href="tel:+554734522100"
                    className="hover:text-[#d4a017] transition-colors"
                  >
                    (47) 3452-2100
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[#d4a017] font-semibold text-xs uppercase tracking-wider mb-0.5">
                  Instagram
                </dt>
                <dd>
                  <a
                    href="https://instagram.com/churrascariaviapiana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#d4a017] transition-colors"
                  >
                    @churrascariaviapiana
                  </a>
                </dd>
              </div>
            </dl>

            <div className="flex flex-col gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#d4a017] hover:bg-[#c49015] text-[#1a0a00] font-bold uppercase tracking-wider text-sm px-6 py-3.5 rounded-sm text-center transition-colors duration-200"
              >
                📍 Ver no Google Maps
              </a>
              <a
                href={WPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#25d366] hover:bg-[#1ebc5a] text-white font-bold uppercase tracking-wider text-sm px-6 py-3.5 rounded-sm text-center transition-colors duration-200"
              >
                💬 Chamar no WhatsApp
              </a>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}
