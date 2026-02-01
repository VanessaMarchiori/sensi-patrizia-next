import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between py-20 px-6 overflow-hidden">

      {/* Background Decor - Un halo subtil pour le côté zen */}
      <div className="absolute top-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -z-10" />

      {/* HEADER : Le Logo */}
      <header className="flex flex-col items-center animate-in fade-in zoom-in duration-1000">
        <div className="w-40 md:w-56 mb-8 drop-shadow-sm">
          <Image
            src="/logo.jpg"
            alt="Sensi Logo"
            width={500}
            height={500}
            className="w-full h-auto mix-blend-multiply opacity-90 contrast-110"
            priority
          />
        </div>
      </header>

      {/* CENTER : Titre & Slogan */}
      <section className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
        <h1 className="font-serif italic text-7xl md:text-9xl tracking-[0.1em] font-light text-creme/90">
          Sensi
        </h1>
        <div className="w-12 h-px bg-gold/40" />
        <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.7em] text-gold font-light">
          Sonothérapie • Sophrologie • Luxembourg
        </p>
      </section>

      {/* FOOTER : Menu Flottant (Floating Menu) */}
      <nav className="fixed bottom-12 z-50">
        <ul className="flex items-center gap-8 md:gap-12 px-10 py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl transition-all hover:bg-white/10">
          <li className="text-[9px] uppercase tracking-[0.4em] font-light hover:text-gold cursor-pointer transition-colors">Esprit</li>
          <li className="text-[9px] uppercase tracking-[0.4em] font-light hover:text-gold cursor-pointer transition-colors">Soins</li>
          <li className="text-[9px] uppercase tracking-[0.4em] font-light hover:text-gold cursor-pointer transition-colors">Contact</li>
        </ul>
      </nav>

      {/* Petite décoration de scroll */}
      <div className="mt-20 opacity-20 flex flex-col items-center gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-creme to-transparent" />
      </div>

    </main>
  );
}
