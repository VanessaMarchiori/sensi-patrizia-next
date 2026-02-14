'use client';

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Link from "next/link";
import { Moon, Sparkles, Flower2, Heart } from 'lucide-react';

export default function Soins() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-x-hidden">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-12 px-4 text-center">
        <h1 className="font-serif font-medium text-5xl md:text-7xl text-[#594A42] tracking-tight animate-in fade-in duration-1000">
          Nos Pratiques
        </h1>
        <div className="h-px w-16 bg-[#C4B28F] mx-auto mt-8" />
        <p className="mt-8 text-[#594A42]/70 font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">
          Explorer • Ressentir • Harmoniser
        </p>
      </section>

      {/* --- SECTION 1 : LES 2 PRATIQUES PRINCIPALES (GHOST CARDS) --- */}
      <div className="w-full max-w-6xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

        {/* SONOTHÉRAPIE */}
        <div className="group relative bg-[#594A42]/5 backdrop-blur-sm rounded-[3rem] p-10 md:p-14 text-center shadow-sm hover:shadow-md transition-all duration-700">
          <h2 className="font-serif text-3xl text-[#594A42] mb-8 font-medium">Sonothérapie</h2>
          <div className="w-8 h-px bg-[#C4B28F] mx-auto mb-8" />
          <ul className="space-y-4 font-sans text-[#594A42] text-xs md:text-sm font-bold tracking-[0.2em] uppercase opacity-80">
            <li>Massage Sonore</li>
            <li>Diapasons Thérapeutiques</li>
            <li>Bains de Gongs</li>
          </ul>
        </div>

        {/* SOPHROLOGIE */}
        <div className="group relative bg-[#594A42]/5 backdrop-blur-sm rounded-[3rem] p-10 md:p-14 text-center shadow-sm hover:shadow-md transition-all duration-700">
          <h2 className="font-serif text-3xl text-[#594A42] mb-8 font-medium">Sophrologie</h2>
          <div className="w-8 h-px bg-[#C4B28F] mx-auto mb-8" />
          <ul className="space-y-4 font-sans text-[#594A42] text-xs md:text-sm font-bold tracking-[0.2em] uppercase opacity-80">
            <li>Gestion du Stress</li>
            <li>Préparation Mentale</li>
            <li>Harmonie Corps-Esprit</li>
          </ul>
        </div>
      </div>

      {/* --- SECTION 2 : ATELIER PLEINE LUNE --- */}
      <section className="w-full max-w-5xl px-6 py-24 border-t border-[#594A42]/10">
        <div className="bg-white/30 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-[#C4B28F]/20 shadow-sm overflow-hidden relative">
          {/* Décoration Lune */}
          <div className="absolute top-10 right-10 opacity-10 text-[#C4B28F] pointer-events-none">
            <Moon size={120} />
          </div>

          <div className="relative z-10 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C4B28F]">
                <Sparkles size={14} /> Atelier Signature
              </span>
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#594A42] bg-[#594A42]/5 px-4 py-2 rounded-full w-fit mx-auto md:mx-0">
                Petit groupe de 5 personnes maximum
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-[#594A42] mb-8 leading-tight">
              Méditation Guidée & Voyage Sonore <br/>
              <span className="italic text-[#C4B28F]">Au Rythme de la Lune</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 text-[#594A42] font-medium leading-relaxed opacity-90 text-justify">
              <div className="space-y-6">
                <p className="italic text-lg">
                  "Chaque lunaison est une invitation au rapprochement, au partage et à l’élan du cœur."
                </p>
                <p>
                  Vivre la Pleine Lune, c'est s'aligner sur une étape lumineuse du cycle naturel. C'est un moment de clarté qui nous invite à la renaissance, dans une croissance consciente et alignée avec nos besoins profonds.
                </p>
                <p>
                  Laissez-vous porter par les vibrations pour libérer les tensions et ouvrir l'espace du cœur sous cette lumière tendre.
                </p>
              </div>

              <div className="space-y-6 bg-[#594A42]/5 p-8 rounded-3xl border border-[#594A42]/5">
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#C4B28F] mb-4">
                  Ce que chaque séance nourrit :
                </p>
                <ul className="space-y-3 text-sm">
                  <li>• L’équilibre et l'apaisement émotionnel</li>
                  <li>• La libération des cycles qui s'achèvent</li>
                  <li>• L'ancrage des intentions positives</li>
                  <li>• Une croissance intérieure en douceur</li>
                  <li className="pt-4 font-bold italic text-[#C4B28F]">Un espace sécurisant et privilégié limité à 5 participantes.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3 : ATELIER MÉNOPAUSE --- */}
      <section className="w-full max-w-5xl px-6 py-24">
        <div className="bg-[#594A42]/5 backdrop-blur-sm rounded-[3rem] p-8 md:p-16 border border-[#594A42]/10 shadow-sm relative">
          <div className="absolute top-10 right-10 opacity-10 text-[#594A42] pointer-events-none">
            <Flower2 size={120} />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C4B28F] mb-6 block">
                Accompagnement Féminin
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#594A42] mb-6">
                Traverser la ménopause en douceur
              </h2>
              <div className="h-px w-12 bg-[#C4B28F] my-4" />
              <p className="text-[#594A42]/80 font-medium italic text-lg">
                Un espace bienveillant, confidentiel et dédié aux femmes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-[#594A42] font-medium opacity-90 leading-relaxed text-justify">
                <p>La périménopause et la ménopause sont des seuils invisibles. Le corps change, les émotions se transforment, le sommeil devient fragile. On peut se sentir déroutée ou fatiguée.</p>
                <p>Je vous propose un accompagnement naturel et non invasif pour vous aider à traverser cette transition avec plus de sérénité, de lenteur et d'écoute.</p>
              </div>

              <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 space-y-6 border border-white/60">
                <h4 className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-[#594A42]">
                  <Heart size={16} className="text-[#C4B28F]" /> Bienfaits du Voyage Sonore
                </h4>
                <ul className="space-y-3 text-sm text-[#594A42]/80 font-medium">
                  <li>• Réduction du stress et de l’anxiété</li>
                  <li>• Apaisement du système nerveux</li>
                  <li>• Amélioration du sommeil</li>
                  <li>• Soulagement des tensions physiques</li>
                  <li>• Reconnexion au corps et lâcher-prise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4 : HISTOIRE & SCIENCE (DEEP DIVE) --- */}
      <section className="w-full bg-[#594A42]/5 py-32 px-6">
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
                En utilisant des instruments aux harmoniques riches comme les bols tibétains ou les gongs, nous ne faisons pas qu'écouter : nous ressentons. Le son devient une matière palpable qui traverse la peau, les muscles et les os.
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

      {/* --- SECTION 5 : CTA FINAL --- */}
      <section className="py-40 text-center px-4">
        <p className="font-serif italic text-[#594A42] text-2xl md:text-3xl mb-12 max-w-2xl mx-auto leading-relaxed">
          "Le silence suit le son, et dans ce silence, tout devient possible."
        </p>
        <Link
          href="/contact"
          className="inline-block px-12 py-5 bg-[#594A42] text-[#F2ECE9] rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#C4B28F] transition-all duration-500 shadow-lg transform hover:-translate-y-1"
        >
          Réserver une séance
        </Link>
        <p className="mt-8 text-[10px] text-[#594A42]/50 uppercase tracking-[0.2em] font-bold">
          Ou écrivez-moi : sensibypat@gmail.com
        </p>
      </section>

      <Footer />
    </main>
  );
}
