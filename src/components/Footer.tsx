export default function Footer() {
  return (
    <footer className="w-full max-w-7xl border-t border-white/10 mt-auto pt-12 pb-40 px-16 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] uppercase tracking-[0.5em] font-extralight text-creme/40 italic">
      <p className="whitespace-nowrap">© 2026 Sensi by Patrizia</p>
      <div className="flex gap-20">
        <span className="hover:text-gold cursor-pointer transition-colors whitespace-nowrap">Mentions Légales</span>
        <span className="hover:text-gold cursor-pointer transition-colors whitespace-nowrap">Instagram</span>
      </div>
    </footer>
  );
}
