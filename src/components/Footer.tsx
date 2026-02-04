'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full z-50 py-8 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Copyright discret */}
        <div className="text-[9px] uppercase tracking-[0.3em] text-creme/40 font-light">
          © 2026 Sensi by Patrizia
        </div>

        {/* Liens secondaires avec effet au survol */}
        <div className="flex gap-8">
          <Link href="/mentions-legales" className="text-[9px] uppercase tracking-[0.3em] text-creme/40 hover:text-gold transition-colors">
            Mentions Légales
          </Link>
          <Link href="https://instagram.com" className="text-[9px] uppercase tracking-[0.3em] text-creme/40 hover:text-gold transition-colors">
            Instagram
          </Link>
        </div>

      </div>

      {/* Ligne de finition ultra-fine */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </footer>
  );
}
