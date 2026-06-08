import {
  FaUser,
  FaBolt,
  FaBookOpen,
  FaQuestionCircle,
  FaCode,
  FaChevronRight,
  FaMoon,
  FaSun,
  FaGlobe,
} from "react-icons/fa";

import { useState } from "react";

const quickMenus = [
  {
    icon: <FaBookOpen />,
    title: "Daftar Kanji",
    desc: "500+ Kanji & kosakata",
    color: "text-blue-500",
  },
  {
    icon: <FaQuestionCircle />,
    title: "Panduan",
    desc: "Cara bermain",
    color: "text-green-500",
  },
  {
    icon: <FaCode />,
    title: "Developer",
    desc: "Tentang project",
    color: "text-purple-500",
  },
];

export default function HomePage() {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState("EN");

  return (
    <main
      className={`min-h-screen transition-all duration-300 flex items-center justify-center px-6 relative overflow-hidden ${
        dark
          ? "bg-[#0b0f1a] text-white"
          : "bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-900"
      }`}
    >
      {/* decorative background glow */}
      <div className="absolute w-150 h-150 bg-blue-500/20 blur-3xl rounded-full -top-50 -left-50" />
      <div className="absolute w-125 h-125 bg-pink-400/20 blur-3xl rounded-full -bottom-50 -right-50" />

      <div className="w-full max-w-6xl z-10">
        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-10">
          <button
            onClick={() =>
              setLang(lang === "EN" ? "ID" : lang === "ID" ? "JP" : "EN")
            }
            className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border transition hover:scale-105 ${
              dark
                ? "border-white/10 bg-white/5"
                : "border-black/10 bg-white/60"
            }`}
          >
            <FaGlobe />
            <span className="font-semibold">{lang}</span>
          </button>

          <button
            onClick={() => setDark(!dark)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border transition hover:scale-105 ${
              dark
                ? "border-white/10 bg-white/5"
                : "border-black/10 bg-white/60"
            }`}
          >
            {dark ? <FaSun /> : <FaMoon />}
            <span className="font-semibold">
              {dark ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>

        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl tracking-wider bg-linear-to-r from-red-500 via-pink-500 to-yellow-400 text-transparent bg-clip-text font-rock-n-roll">
            漢字バトル
          </h1>

          <p className={`mt-4 ${dark ? "text-gray-300" : "text-gray-600"}`}>
            Belajar bahasa Jepang dengan cara yang seru dan interaktif.
          </p>

          <div className="mt-6 inline-block px-4 py-2 rounded-full text-sm bg-black/5 dark:bg-white/10 backdrop-blur-md">
            ⚔️ Latihan • Bertarung • Kuasai Kanji
          </div>
        </div>

        {/* MAIN MODE */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* SINGLE */}
          <button
            className={`group p-8 rounded-3xl border backdrop-blur-xl transition-all cursor-pointer hover:scale-[1.03] hover:shadow-2xl ${
              dark
                ? "bg-white/5 border-white/10"
                : "bg-white/70 border-black/10"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 text-2xl">
                  <FaUser />
                </div>

                <div className="text-left">
                  <h2 className="text-2xl font-bold">Single Player</h2>
                  <p className="text-sm opacity-70">Mode latihan & belajar</p>
                </div>
              </div>

              <FaChevronRight className="opacity-50 group-hover:translate-x-1 transition" />
            </div>

            <p className="mt-6 text-sm opacity-70 text-left">
              Latihan kanji, kosakata, dan membaca tanpa lawan online.
            </p>
          </button>

          {/* BATTLE */}
          <button className="group p-8 rounded-3xl bg-linear-to-br from-red-600 to-pink-600 text-white hover:scale-[1.03] transition shadow-lg cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white/20 text-white text-2xl">
                  <FaBolt />
                </div>

                <div className="text-left">
                  <h2 className="text-2xl font-bold">Battle Mode</h2>
                  <p className="text-white/80 text-sm">
                    Pertarungan PvP Online
                  </p>
                </div>
              </div>

              <FaChevronRight className="text-white/70 group-hover:translate-x-1 transition" />
            </div>

            <p className="mt-6 text-sm text-white/80 text-left">
              Sistem ranking • Pertarungan real-time • Sistem room
            </p>
          </button>
        </div>

        {/* QUICK MENU */}
        <div className="grid grid-cols-3 gap-4">
          {quickMenus.map((item, i) => (
            <button
              key={i}
              className={`group p-5 text-start rounded-2xl border backdrop-blur-md transition hover:scale-105 hover:shadow-xl cursor-pointer ${
                dark
                  ? "bg-white/5 border-white/10"
                  : "bg-white/70 border-black/10"
              }`}
            >
              <div className="flex justify-between items-center ">
                <div className={`  text-xl ${item.color}`}>{item.icon}</div>
                <FaChevronRight className="opacity-30 group-hover:opacity-80 transition" />
              </div>

              <h3 className="mt-4 font-bold">{item.title}</h3>
              <p className="text-sm opacity-60">{item.desc}</p>
            </button>
          ))}
        </div>

        {/* FOOTER */}
        <div className="text-center mt-12 text-xs opacity-50">
          Kanji Battle © 2026 • Dibuat untuk belajar bahasa Jepang
        </div>
      </div>
    </main>
  );
}
