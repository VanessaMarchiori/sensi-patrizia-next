'use client';

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { Heart, Wind, Sparkles } from 'lucide-react'; // Import des icônes élégantes

export default function Esprit() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-x-hidden">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-12 px-6 text-center max-w-3xl">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C4B28F] mb-6 block">
          L'Essence
        </span>
        <h1 className="font-serif font-medium text-5xl md:text-7xl text-[#594A42] tracking-tight">
          La Vision Sensi
        </h1>
      </section>

      {/* --- GRANDE CARTE PRÉSENTATION --- */}
      <section className="w-full max-w-5xl px-4 md:px-6 pb-20">
        <div className="bg-[#594A42]/5 backdrop-blur-md border border-[#594A42]/10 rounded-[3rem] p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center shadow-[0_10px_30px_-10px_rgba(89,74,66,0.1)]">
          <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-t-full border border-[#C4B28F]/30 bg-[#C4B28F]/5 flex items-center justify-center overflow-hidden">
             <span className="text-[#594A42]/40 font-serif italic text-lg text-center px-4">Portrait de Patrizia</span>
          </div>

          <div className="flex flex-col space-y-8 text-left">
            <h2 className="font-serif text-4xl text-[#594A42] font-medium leading-tight">
              Une quête de <br/>sens et de silence
            </h2>
            <div className="space-y-6 font-sans text-[#594A42] font-medium text-base md:text-lg leading-relaxed opacity-90">
              <p>Ma pratique est née d'un constat simple : dans un monde saturé de bruits, le retour à soi est devenu une nécessité vitale.</p>
              <p>Installée au Luxembourg, j'ai conçu Sensi comme un sanctuaire vibratoire où le son ré-informe le corps et calme l'esprit.</p>
            </div>
            <div className="pt-4">
               <div className="h-1 w-12 bg-[#C4B28F] rounded-full mb-4" />
               <p className="font-serif font-bold text-[#594A42] text-xl italic text-left">Patrizia</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION VALEURS (AVEC ICÔNES) --- */}
      <section className="w-full max-w-6xl px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Carte Écoute */}
          <div className="group bg-white/20 backdrop-blur-sm border border-[#594A42]/5 rounded-[2.5rem] p-10 text-center transition-all duration-500 hover:bg-[#594A42]/5 shadow-sm">
            <div className="w-14 h-14 bg-[#C4B28F]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#C4B28F] group-hover:scale-110 transition-transform">
              <Heart size={28} strokeWidth={1.5} />
            </div>
            <h4 className="text-[#594A42] font-bold uppercase tracking-widest text-xs mb-4">Écoute</h4>
            <p className="text-[#594A42]/70 text-sm font-medium leading-relaxed">Une présence totale pour accueillir vos besoins sans jugement.</p>
          </div>

          {/* Carte Résonance */}
          <div className="group bg-white/20 backdrop-blur-sm border border-[#594A42]/5 rounded-[2.5rem] p-10 text-center transition-all duration-500 hover:bg-[#594A42]/5 shadow-sm">
            <div className="w-14 h-14 bg-[#C4B28F]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#C4B28F] group-hover:scale-110 transition-transform">
              <Sparkles size={28} strokeWidth={1.5} />
            </div>
            <h4 className="text-[#594A42] font-bold uppercase tracking-widest text-xs mb-4">Résonance</h4>
            <p className="text-[#594A42]/70 text-sm font-medium leading-relaxed">La vibration comme pont entre le corps physique et l'esprit.</p>
          </div>

          {/* Carte Harmonie */}
          <div className="group bg-white/20 backdrop-blur-sm border border-[#594A42]/5 rounded-[2.5rem] p-10 text-center transition-all duration-500 hover:bg-[#594A42]/5 shadow-sm">
            <div className="w-14 h-14 bg-[#C4B28F]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#C4B28F] group-hover:scale-110 transition-transform">
              <Wind size={28} strokeWidth={1.5} />
            </div>
            <h4 className="text-[#594A42] font-bold uppercase tracking-widest text-xs mb-4">Harmonie</h4>
            <p className="text-[#594A42]/70 text-sm font-medium leading-relaxed">Retrouver son propre rythme naturel dans la durée.</p>
          </div>

        </div>
      </section>

      {/* --- SECTION HISTOIRE SOPHROLOGIE --- */}
      <section className="w-full bg-[#594A42]/5 py-24 px-6 border-y border-[#594A42]/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl text-[#594A42] italic mb-4">L'Origine de la Sophrologie</h3>
            <div className="h-px w-16 bg-[#C4B28F] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-[#594A42] font-medium opacity-90 leading-relaxed text-justify text-base md:text-lg">
            <p>
              Fondée dans les années 60 par le neuropsychiatre Alfonso Caycedo, la sophrologie est bien plus qu'une technique de relaxation. C'est une pédagogie de l'existence. Le terme vient du grec "SOS" (harmonie), "PHREN" (conscience) et "LOGOS" (étude).
            </p>
            <p>
              Inspirée du Yoga, du Zen et de la phénoménologie, elle permet de conquérir un nouvel équilibre. En travaillant sur la respiration et la visualisation, on apprend à transformer ses tensions en ressources positives durables.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
