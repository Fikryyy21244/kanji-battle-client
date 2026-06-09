import {
  FaUser,
  FaBolt,
  FaBookOpen,
  FaTrophy,
  FaCog,
  FaChevronRight,
  FaMoon,
  FaSun,
  FaGlobe,
  FaQuestionCircle,
  FaCode,
} from "react-icons/fa";

import { useState } from "react";
import TopBar from "../../components/common/TopBar";
import { useTheme } from "../../contexts/ThemeContext";
import { quickMenus } from "../../datas/homeMenus";
import QuickMenuCard from "../../components/home/QuickMenuCard";

export default function HomePage() {
  const { dark } = useTheme();
  return (
    <section>
      <div className="w-full max-w-6xl">
        {/* TOP BAR */}
        <TopBar />

        {/* HERO */}
        <div className="text-center mb-8">
          <h1 className="text-7xl font-rock-n-roll tracking-wider  text-black">
            漢字バトル
          </h1>

          <p
            className={`mt-4 text-base ${
              dark ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            Belajar bahasa Jepang dengan cara yang seru dan kompetitif.
          </p>

          <div className="mt-5 inline-flex px-4 py-2 rounded-full bg-bright-lemon border-2 border-black text-sm font-medium">
            Learn • Practice • Battle
          </div>
        </div>

        {/* MAIN MODES */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          {/* TRAINING */}
          <a
            href="/training"
            className={`group p-8 rounded-3xl border transition hover:scale-[1.02] hover:shadow-2xl ${
              dark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="p-4 rounded-2xl bg-blue-100 text-blue-500 text-3xl">
                  <FaBookOpen />
                </div>

                <div>
                  <h2 className="text-2xl font-bold font-rock-n-roll">
                    Training Mode
                  </h2>
                  <p className="opacity-70 text-base">Belajar & latihan JLPT</p>
                </div>
              </div>

              <FaChevronRight className="group-hover:translate-x-1 transition" />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm">
                Kanji
              </span>
              <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm">
                Vocabulary
              </span>
              <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 text-sm">
                Quiz
              </span>
              <span className="px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm">
                JLPT
              </span>
            </div>
          </a>

          {/* BATTLE */}
          <a
            href="/battle"
            className="group p-8 rounded-3xl bg-linear-to-br from-bright-lemon via-yellow-400 to-amber-500 text-white hover:scale-[1.02] transition shadow-xl"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="p-4 rounded-2xl bg-black/70 text-white text-3xl">
                  <FaBolt />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black font-rock-n-roll">
                    Battle Mode
                  </h2>

                  <p className="text-black/70 text-base">
                    PvP Online & Arena Peringkat
                  </p>
                </div>
              </div>

              <FaChevronRight className="text-black/40 group-hover:translate-x-1 transition" />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-full bg-white/20 text-black text-sm">
                Ranked
              </span>
              <span className="px-4 py-2 rounded-full bg-white/20 text-black text-sm">
                Casual
              </span>
              <span className="px-4 py-2 rounded-full bg-white/20 text-black text-sm">
                Room Match
              </span>
            </div>
          </a>
        </div>

        {/* QUICK MENU */}
        <div className="grid grid-cols-3 gap-4">
          {quickMenus.map((item, i) => (
            <QuickMenuCard
              key={i}
              color={item.color}
              desc={item.desc}
              href={item.href}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>

        {/* FOOTER */}
        <div className="text-center mt-12 text-xs opacity-50">
          Kanji Battle © 2026 • Learn Japanese Through Battle
        </div>
      </div>
    </section>
  );
}
