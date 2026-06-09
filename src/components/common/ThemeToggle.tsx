import { FaMoon, FaSun } from "react-icons/fa";

type ThemeToggleProps = {
  dark: boolean;
  onToggle: () => void;
};

export default function ThemeToggle({ dark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        flex items-center gap-2
        px-4 py-2
        rounded-full
        border
        transition-all duration-200
        hover:scale-105
        cursor-pointer
        ${
          dark
            ? "bg-zinc-900 border-zinc-800 text-white"
            : "bg-white border-gray-200 text-black"
        }
      `}
    >
      {dark ? <FaSun /> : <FaMoon />}
      <span>{dark ? "Light" : "Dark"}</span>
    </button>
  );
}
