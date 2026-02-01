import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-8 overflow-hidden">

      {/* Menu Flottant */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <ul className="flex items-center gap-10 px-10 py-4 bg-black/10 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          <li className="text-[10px] uppercase tracking-[0.4em] hover:text-gold cursor-pointer transition-colors">Esprit</li>
          <li className="text-[10px] uppercase tracking-[0.4em] hover:text-gold cursor-pointer transition-colors">Soins</li>
          <li className="text-[10px] uppercase tracking-[0.4em] hover:text-gold cursor-pointer transition-colors">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <div className="mb-12 opacity-80">
          <Image
            src="/logo.jpg"
            alt="Sensi Logo"
            width={200}
            height={200}
            className="mix-blend-multiply contrast-125"
          />
        </div>

        <h1 className="font-serif text-7xl md:text-9xl mb-6 font-light tracking-widest italic">
          Sensi
        </h1>

        <div className="w-16 h-[1px] bg-gold/50 mb-8"></div>

        <p className="text-[11px] md:text-xs uppercase tracking-[0.6em] text-gold font-light">
          Sonothérapie • Sophrologie • Luxembourg
        </p>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-32 opacity-20">
        <div className="w-[1px] h-24 bg-gradient-to-b from-creme to-transparent"></div>
      </div>
    </main>
  );
}
