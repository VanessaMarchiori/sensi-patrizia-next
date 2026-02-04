'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed w-full top-6 z-[100] px-4 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto relative bg-[#FBF9F4]/95 backdrop-blur-xl border border-[#594A42]/10 rounded-full px-8 py-3 flex items-center gap-10 shadow-[0_4px_20px_-2px_rgba(89,74,66,0.08)] transition-all duration-300">

        {/* LOGO TEXTUEL : Plus de problème d'image illisible */}
        <Link href="/" className="group flex flex-col items-center">
          <span className="font-serif italic text-xl text-[#C4B28F] leading-none">S</span>
          <span className="text-[7px] uppercase tracking-[0.4em] text-[#594A42] font-bold -mt-1 group-hover:text-[#C4B28F] transition-colors">
            Sensi
          </span>
        </Link>

        {/* Séparateur vertical discret */}
        <div className="h-4 w-px bg-[#594A42]/10 hidden md:block" />

        {/* LIENS */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/esprit" className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${isActive('/esprit') ? 'text-[#C4B28F]' : 'text-[#594A42] hover:text-[#C4B28F]'}`}>
            Esprit
          </Link>
          <Link href="/soins" className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${isActive('/soins') ? 'text-[#C4B28F]' : 'text-[#594A42] hover:text-[#C4B28F]'}`}>
            Soins
          </Link>
        </div>

        {/* BOUTON CONTACT */}
        <Link href="/contact" className={`hidden md:block px-6 py-2 rounded-full border text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 ${isActive('/contact') ? 'bg-[#C4B28F] text-white border-[#C4B28F]' : 'bg-[#594A42]/5 border-[#594A42]/20 text-[#594A42] hover:bg-[#C4B28F] hover:text-white'}`}>
          Contact
        </Link>

        {/* MOBILE BURGER */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#594A42]">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
    </header>
  );
}
