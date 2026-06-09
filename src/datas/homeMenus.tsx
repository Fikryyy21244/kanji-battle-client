import { FaBookOpen, FaTrophy, FaCode } from "react-icons/fa";

export const quickMenus = [
  {
    icon: <FaBookOpen />,
    title: "Learning Hub",
    desc: "Start from Kana → Kanji Mastery",
    color: "text-blue-500",
    href: "/learning",
  },
  {
    icon: <FaTrophy />,
    title: "Ranking",
    desc: "Leaderboard pemain",
    color: "text-yellow-500",
    href: "/leaderboard",
  },
  {
    icon: <FaCode />,
    title: "About This App",
    desc: "Developer, tech stack & project info",
    color: "text-purple-500",
    href: "/about-app",
  },
];
