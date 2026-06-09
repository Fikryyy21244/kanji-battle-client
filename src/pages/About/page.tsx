import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../../components/common/PageHeader";
import {
  FaBolt,
  FaBookOpen,
  FaCode,
  FaGithub,
  FaInstagram,
  FaGlobe,
  FaUserCircle,
} from "react-icons/fa";
import BackButton from "../../components/common/BackButton";
import TopBar from "../../components/common/TopBar";

export default function AboutPage() {
  const features = [
    {
      icon: <FaBookOpen />,
      title: "Kanji Learning",
      desc: "Belajar 500+ Kanji dengan sistem interaktif dan progress tracking.",
    },
    {
      icon: <FaBolt />,
      title: "Battle Mode",
      desc: "Latihan cepat dengan sistem duel untuk meningkatkan refleks hafalan.",
    },
    {
      icon: <FaCode />,
      title: "Modern Stack",
      desc: "Dibangun dengan teknologi web modern dan performa tinggi.",
    },
  ];

  const tech = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "React Router",
  ];

  const social = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/yourname",
      href: "https://github.com/",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      value: "@yourname",
      href: "https://instagram.com/",
    },
    {
      icon: <FaGlobe />,
      label: "Website",
      value: "yourdomain.com",
      href: "#",
    },
  ];

  return (
    <section>
      <div className="w-full max-w-6xl mx-auto">
        {/* Top Bar */}
        <TopBar />
        {/* Back to menu */}
        <BackButton />

        {/* Header */}
        <div className="my-10">
          <PageHeader color="text-black">ABOUT THIS APP</PageHeader>
          <p className="text-gray-500 mt-3 text-base">
            Aplikasi belajar Kanji berbasis game yang dibuat agar belajar jadi
            lebih cepat, interaktif, dan tidak membosankan.
          </p>
        </div>

        {/* Hero */}
        <div className="p-6 rounded-2xl bg-black text-white shadow-xl">
          <h2 className="text-2xl font-bold">Kanji Battle</h2>
          <p className="text-white/70 mt-2">
            Game-based learning platform untuk meningkatkan kemampuan Kanji
            melalui sistem battle, level, dan progress tracking.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-5 rounded-xl border bg-white shadow-sm hover:shadow-md"
            >
              <div className="text-xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-12">
          <div className="flex items-center gap-2 font-semibold mb-4">
            <FaCode />
            Tech Stack
          </div>

          <div className="flex flex-wrap gap-3">
            {tech.map((t, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-gray-100 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Developer Info */}
        <div className="mt-14 p-6 rounded-2xl border bg-gray-50">
          <div className="flex items-center gap-3 mb-4">
            <FaUserCircle className="text-2xl" />
            <h3 className="text-lg font-bold">Developer</h3>
          </div>

          <p className="text-gray-600">
            Aplikasi ini dikembangkan oleh <b>Yaya Yami</b>, seorang web
            developer yang fokus pada UI modern, game-based learning, dan
            interactive web app.
          </p>
        </div>

        {/* Social Media */}
        <div className="mt-10">
          <h3 className="font-semibold mb-4">Social Media</h3>

          <div className="grid md:grid-cols-3 gap-4">
            {social.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                className="
                  flex items-center gap-3
                  p-4 rounded-xl
                  border bg-white
                  hover:shadow-md hover:-translate-y-1
                  transition
                "
              >
                <div className="text-lg">{s.icon}</div>
                <div>
                  <p className="font-medium">{s.label}</p>
                  <p className="text-sm text-gray-500">{s.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t pt-6 text-sm text-gray-400 flex justify-between">
          <span>Made with ❤️ for learning Japanese</span>
          <span>v1.0.0</span>
        </div>
      </div>
    </section>
  );
}
