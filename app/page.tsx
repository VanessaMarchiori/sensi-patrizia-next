import Image from "next/image";
import Footer from "/src/components/Footer.tsx";
import Header from "/src/components/Header";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-sauge overflow-x-hidden">

      <Header />

      <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="w-64 md:w-80 mb-12 drop-shadow-2xl">
          <Image
            src="/logo 500.jpg"
            alt="Sensi Logo"
            width={600}
            height={600}
            className="rounded-full mix-blend-multiply opacity-90"
            priority
          />
        </div>

        <h1 className="font-serif italic text-7xl md:text-9xl mb-8 font-light tracking-widest text-creme">
          Sensi
        </h1>

        <div className="w-16 h-[1px] bg-gold/50 mb-8"></div>

        <p className="text-[11px] md:text-xs uppercase tracking-[0.6em] text-gold font-light">
          Sonothérapie • Sophrologie • Luxembourg
        </p>
      </section>

      <Footer />

    </main>
  );
}
