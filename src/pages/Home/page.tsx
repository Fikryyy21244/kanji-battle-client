import React from "react";

export default function HomePage() {
  return (
    <section className="min-h-screen bg-neutral-100 text-black font-mono relative overflow-hidden p-6 md:p-10">
      {/* ===== BACKGROUND SCREENTONE ===== */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        {/* ================= LEFT NAV ================= */}
        <aside className="lg:col-span-2 flex lg:flex-col gap-4">
          <div className="w-full border-4 border-black bg-white shadow-[6px_6px_0px_#000] p-4 relative">
            {/* label */}
            <div className="absolute -top-3 -left-3 bg-black text-white px-2 py-1 text-xs font-black rotate-[-6deg]">
              MENU
            </div>

            <nav className="flex lg:flex-col gap-3 justify-center text-center font-black uppercase text-sm">
              <button className="border-2 border-black px-2 py-1 hover:bg-yellow-300 transition">
                Gallery
              </button>

              <button className="border-2 border-black px-2 py-1 hover:bg-yellow-300 transition">
                About
              </button>

              <button className="border-2 border-black px-2 py-1 hover:bg-yellow-300 transition">
                Contact
              </button>
            </nav>
          </div>
        </aside>

        {/* ================= MAIN AREA ================= */}
        <main className="lg:col-span-10 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* ===== HERO PANEL ===== */}
          <div className="md:col-span-12 border-4 border-black bg-white shadow-[10px_10px_0px_#000] p-6 relative overflow-hidden">
            {/* speed lines */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 10px)",
              }}
            />

            {/* speech bubble */}
            <div className="absolute top-4 left-4 bg-white border-2 border-black px-3 py-1 text-xs font-black shadow-[3px_3px_0px_#000] rotate-[-3deg]">
              ENTER THE KANJI BATTLE WORLD!
            </div>

            <h1 className="text-4xl md:text-6xl font-black italic tracking-tight mt-10 transform -skew-x-6">
              KANJI BATTLE
            </h1>

            <p className="mt-3 font-bold text-sm md:text-base text-gray-700">
              Learn • Fight • Master Japanese Kanji like a manga protagonist
            </p>

            {/* impact text */}
            <div className="absolute bottom-4 right-4 text-5xl font-black rotate-12">
              ZAAAP!
            </div>
          </div>

          {/* ===== PANEL 1 ===== */}
          <div className="md:col-span-5 border-4 border-black bg-white shadow-[8px_8px_0px_#000] p-4 relative">
            <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 font-black">
              ACTION
            </div>

            <div className="h-48 bg-gray-200 border-2 border-black flex items-center justify-center">
              <span className="font-bold opacity-60">
                [ CHARACTER / AVATAR PANEL ]
              </span>
            </div>

            <h2 className="mt-3 font-black uppercase text-lg border-b-4 border-black">
              CREATE / JOIN ROOM
            </h2>
          </div>

          {/* ===== PANEL 2 (HIGHLIGHT) ===== */}
          <div className="md:col-span-7 border-4 border-black bg-yellow-300 shadow-[10px_10px_0px_#000] p-5 relative overflow-hidden">
            <div className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-1 font-black rotate-6">
              SYSTEM
            </div>

            <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_#000]">
              <h3 className="font-black text-lg mb-2">KANJI BATTLE SYSTEM</h3>
              <p className="font-bold text-sm">
                Answer kanji correctly to deal damage. Mistakes reduce your HP.
                Learn faster, fight smarter, win battles.
              </p>
            </div>

            <div className="absolute bottom-3 right-3 text-4xl font-black rotate-[-10deg]">
              POW!
            </div>
          </div>

          {/* ===== PANEL 3 ===== */}
          <div className="md:col-span-6 border-4 border-black bg-white shadow-[8px_8px_0px_#000] p-4">
            <div className="h-40 bg-black text-white flex items-center justify-center border-2 border-black">
              <span className="font-bold">[ KANJI LIST PANEL ]</span>
            </div>

            <h3 className="mt-3 font-black uppercase">Kanji List</h3>
          </div>

          {/* ===== PANEL 4 ===== */}
          <div className="md:col-span-6 border-4 border-black bg-white shadow-[8px_8px_0px_#000] p-4 relative">
            <div className="h-40 bg-gray-100 border-2 border-black flex items-center justify-center">
              <span className="font-bold opacity-60">[ GUIDE PANEL ]</span>
            </div>

            <h3 className="mt-3 font-black uppercase">How To Play</h3>

            <div className="absolute top-2 right-2 text-xl font-black rotate-12">
              BOOM!
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
