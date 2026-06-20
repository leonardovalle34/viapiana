import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0d0400] border-t border-[#d4a017]/12 px-8 py-7 flex justify-between items-center flex-wrap gap-3">
      <Image
        src="/images/logo-viapiana.png"
        alt="Churrascaria Viapiana"
        width={120}
        height={42}
        className="h-10 w-auto object-contain opacity-80"
      />
      <p className="text-[11px] text-white/25">
        © {new Date().getFullYear()} Churrascaria Viapiana · Araquari, SC
      </p>
      <p className="text-[11px] text-white/25">
        churrascariavipiana.com.br · (47) 3452-2100
      </p>
    </footer>
  );
}
