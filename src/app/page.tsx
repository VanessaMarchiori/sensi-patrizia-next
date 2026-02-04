'use client';

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <Header />

      {/* Halo de lumière central */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(196,178,143,0.15)_0%,_transparent_70%)]" />
      </div>

      <section className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl">

        {/* On remplace le gros logo par une typographie majestueuse ou un visuel discret */}
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">

          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#C4B28F] font-bold">
            Sensi • Harmonie Intérieure
          </span>

          <h1 className="font-serif font-medium text-[#594A42] text-5xl md:text-8xl tracking-tighter leading-none">
            L'Art de la <br/> <span className="italic">Vibration</span>
          </h1>

          <div className="h-px w-24 bg-[#C4B28F]/40 mx-auto my-12" />

          {/* LA GHOST CARD CENTRALE */}
          <div className="bg-[#594A42]/5 backdrop-blur-md border border-[#594A42]/10 rounded-[3rem] p-8 md:p-12 max-w-lg mx-auto shadow-sm">
            <p className="font-sans font-medium text-[#594A42] text-sm md:text-base leading-relaxed opacity-90 mb-8">
              Découvrez la sonothérapie et la sophrologie au Luxembourg.
              Un voyage sensoriel pour réaligner votre corps et votre esprit.
            </p>

            <button className="px-10 py-4 bg-[#594A42] text-[#F2ECE9] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#C4B28F] transition-all duration-500 shadow-md">
              Découvrir les soins
            </button>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}
