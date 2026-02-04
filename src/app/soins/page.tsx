'use client';

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function Soins() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-x-hidden">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-12 px-4 text-center">
        <h1 className="font-serif font-medium text-5xl md:text-6xl text-[#594A42] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Nos Pratiques
        </h1>
        <div className="h-px w-16 bg-[#C4B28F] mx-auto mt-6" />
        <p className="mt-6 text-[#594A42]/70 font-sans text-sm uppercase tracking-[0.2em]">
          Explorer • Ressentir • Harmoniser
        </p>
      </section>

      {/* --- LES 2 CARTES CÔTE À CÔTE (GHOST STYLE) --- */}
      <div className="w-full max-w-6xl px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

        {/* CARTE 1 : SONOTHÉRAPIE */}
        {/* Design : bg-[#594A42]/5 (teinte terre très légère) + Ombre douce */}
        <div className="group relative bg-[#594A42]/5 backdrop-blur-sm rounded-[2.5rem] p-10 text-center shadow-[0_10px_30px_-10px_rgba(89,74,66,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(89,74,66,0.15)] transition-all duration-700 hover:-translate-y-1 cursor-default">
          <div className="absolute inset-0 border border-[#594A42]/10 rounded-[2.5rem] opacity-50" />

          <h2 className="font-serif text-3xl text-[#594A42] mb-6 font-medium group-hover:text-[#C4B28F] transition-colors">
            Sonothérapie
          </h2>

          <div className="w-8 h-px bg-[#594A42]/20 mx-auto mb-6" />

          {/* Liste épurée */}
          <ul className="space-y-4 font-sans text-[#594A42] text-sm md:text-base font-medium tracking-wide uppercase opacity-80">
            <li>Massage Sonore</li>
            <li>Diapasons Thérapeutiques</li>
            <li>Bains de Gongs</li>
          </ul>
        </div>


        {/* CARTE 2 : SOPHROLOGIE */}
        <div className="group relative bg-[#594A42]/5 backdrop-blur-sm rounded-[2.5rem] p-10 text-center shadow-[0_10px_30px_-10px_rgba(89,74,66,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(89,74,66,0.15)] transition-all duration-700 hover:-translate-y-1 cursor-default">
           <div className="absolute inset-0 border border-[#594A42]/10 rounded-[2.5rem] opacity-50" />

          <h2 className="font-serif text-3xl text-[#594A42] mb-6 font-medium group-hover:text-[#C4B28F] transition-colors">
            Sophrologie
          </h2>

          <div className="w-8 h-px bg-[#594A42]/20 mx-auto mb-6" />

          <ul className="space-y-4 font-sans text-[#594A42] text-sm md:text-base font-medium tracking-wide uppercase opacity-80">
            <li>Gestion du Stress</li>
            <li>Préparation Mentale</li>
            <li>Harmonie Corps-Esprit</li>
          </ul>
        </div>

      </div>


      {/* --- SECTION DEEP DIVE : L'HISTOIRE & LE SENS --- */}
      {/* C'est ici qu'on met le contenu riche demandé */}

      <section className="w-full bg-[#594A42]/5 py-24 px-6 mt-8">
        <div className="max-w-4xl mx-auto">

          {/* Bloc 1 : Origines */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 mb-20 items-start">
            <h3 className="font-serif text-3xl text-[#594A42] italic md:text-right leading-tight">
              L'écho des<br/>origines
            </h3>
            <div className="space-y-6 text-[#594A42] leading-relaxed font-medium opacity-90 text-justify">
              <p>
                La sonothérapie puise ses racines dans des traditions millénaires, des plateaux de l'Himalaya aux écoles de mystères de la Grèce antique. Pythagore lui-même enseignait déjà que l'univers entier est vibration.
              </p>
              <p>
                En utilisant des instruments aux harmoniques riches comme les bols tibétains (alliage de 7 métaux) ou les gongs, nous ne faisons pas qu'écouter : nous ressentons. Le son devient une matière palpable qui traverse la peau, les muscles et les os.
              </p>
            </div>
          </div>

          {/* Séparateur */}
          <div className="h-px w-full bg-[#594A42]/10 mb-20" />

          {/* Bloc 2 : Science */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-start">
            <div className="space-y-6 text-[#594A42] leading-relaxed font-medium opacity-90 text-justify order-2 md:order-1">
              <p>
                Au-delà de la tradition, la science moderne confirme l'impact des fréquences sur notre cerveau. Les vibrations émises lors d'un soin ralentissent les ondes cérébrales, nous faisant passer de l'état Bêta (éveil actif) à l'état Alpha, voire Thêta (relaxation profonde et rêve éveillé).
              </p>
              <p>
                C'est dans cet espace de lâcher-prise que le corps active ses propres mécanismes de régénération, apaisant le système nerveux et libérant les tensions émotionnelles cristallisées.
              </p>
            </div>
            <h3 className="font-serif text-3xl text-[#594A42] italic order-1 md:order-2 leading-tight">
              La science<br/>vibratoire
            </h3>
          </div>

        </div>
      </section>


      {/* CTA final */}
      <section className="py-32 text-center">
        <p className="font-serif italic text-[#594A42] text-xl mb-8">
          "Le silence suit le son, et dans ce silence, tout devient possible."
        </p>
        <button className="px-10 py-4 border border-[#594A42] rounded-full text-[#594A42] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#594A42] hover:text-[#E3D4CD] transition-all duration-500">
          Réserver une séance
        </button>
      </section>

      <Footer />
    </main>
  );
}
