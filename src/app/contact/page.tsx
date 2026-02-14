'use client';

import React from 'react';
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { Mail, Phone, MapPin, ExternalLink, TrainFront, Car } from 'lucide-react';

export default function Contact() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-x-hidden">
      <Header />

      {/* --- SECTION 1 : HERO --- */}
      <section className="pt-40 pb-24 px-6 text-center max-w-3xl">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C4B28F] mb-6 block">
          Contact
        </span>
        <h1 className="font-serif font-medium text-5xl md:text-7xl text-[#594A42] tracking-tight">
          Entrer en <span className="italic">Résonance</span>
        </h1>

        {/* Patrizia au cœur du message */}
        <div className="mt-12 space-y-4">
            <p className="font-serif italic text-2xl text-[#594A42] opacity-90">
                "Je vous accueille personnellement au sein de l'espace Le8..."
            </p>
            <p className="font-sans text-[#594A42]/70 text-sm uppercase tracking-widest font-bold">
                — Patrizia
            </p>
        </div>
      </section>

      {/* --- SECTION 2 : LE LIEU & CARTE STYLISÉE --- */}
      <section className="w-full max-w-6xl px-4 md:px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* Détails du lieu : GHOST CARD */}
          <div className="bg-[#594A42]/5 backdrop-blur-md border border-[#594A42]/10 rounded-[3rem] p-10 md:p-14 flex flex-col justify-between shadow-sm">
            <div className="space-y-8 text-left">
              <div>
                <h2 className="font-serif text-3xl text-[#594A42] mb-4">Espace Le8</h2>
                <p className="font-sans text-[#594A42]/80 leading-relaxed font-medium">
                  Situé à Howald, à quelques pas de la Cloche d'Or, ce lieu a été choisi par Patrizia pour son énergie calme et sa lumière apaisante.
                </p>
              </div>

              <div className="space-y-6">
                {/* Adresse avec Pin visible */}
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-[#C4B28F] rounded-full flex items-center justify-center text-white shadow-md">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-[#594A42] font-bold">8 Ceinture des Rosiers</p>
                    <p className="text-[#594A42]/70 text-sm">L-2446 Howald, Luxembourg</p>
                  </div>
                </div>

                <div className="h-px w-full bg-[#594A42]/10" />

                {/* Accès Mobiliteit */}
                <div className="flex gap-4">
                  <TrainFront size={20} className="text-[#C4B28F] shrink-0" />
                  <div className="space-y-2">
                    <p className="text-[#594A42] font-semibold text-sm">Transports Publics (Tram T1 / Bus)</p>
                    <a
                      href="https://www.mobiliteit.lu/fr/planifier-un-trajet/"
                      target="_blank"
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C4B28F] hover:opacity-70 transition-opacity"
                    >
                      Itinéraire Mobiliteit.lu <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Accès Voiture */}
                <div className="flex gap-4">
                    <Car size={20} className="text-[#C4B28F] shrink-0" />
                    <p className="text-[#594A42]/70 text-sm font-medium">Stationnement aisé dans la rue.</p>
                </div>
              </div>

              <div className="pt-8 flex flex-col gap-4">
                <a href="mailto:sensibypat@gmail.com" className="text-[#594A42] font-bold hover:text-[#C4B28F] transition-colors flex items-center gap-3">
                    <Mail size={18} /> sensibypat@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* MAP STYLISÉE NUDE/SABLE */}
          <div className="w-full h-[500px] lg:h-full rounded-[3rem] overflow-hidden border border-[#594A42]/10 shadow-inner relative">
            {/* Overlay pour teinter la map aux couleurs du site */}
            <div className="absolute inset-0 bg-[#E3D4CD]/20 pointer-events-none mix-blend-multiply z-10" />

           <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10338.831733792!2d6.115!3d49.585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479549fe8e0cb44f%3A0x4c691bb15433623d!2s8%20Ceinture%20des%20Rosiers%2C%202446%20Hesperange!5e0!3m2!1sfr!2slu!4v1710000000000!5m2!1sfr!2slu&z=14"
  width="100%"
  height="100%"
  style={{ border: 0, filter: 'grayscale(0.5) sepia(0.2) contrast(0.9)' }}
  allowFullScreen
  loading="lazy"
  className="relative z-0"
></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
