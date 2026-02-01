export default function Header() {
  return (
    <header className="w-full flex justify-center pt-10">
      <nav className="z-50 px-12 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-xl">
        <ul className="flex items-center justify-center">
          {/* On utilise px-10 sur chaque item pour garantir l'espace entre les mots */}
          <li className="px-10 text-[11px] uppercase tracking-[0.3em] font-light text-creme hover:text-gold cursor-pointer transition-all whitespace-nowrap">
            Esprit
          </li>
          <li className="px-10 text-[11px] uppercase tracking-[0.3em] font-light text-creme hover:text-gold cursor-pointer transition-all whitespace-nowrap border-x border-white/10">
            Soins
          </li>
          <li className="px-10 text-[11px] uppercase tracking-[0.3em] font-light text-creme hover:text-gold cursor-pointer transition-all whitespace-nowrap">
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}
