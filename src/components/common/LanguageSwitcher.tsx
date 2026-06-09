import { FaGlobe } from "react-icons/fa";
import type { Language } from "../../contexts/LanguageContext";

type Props = {
  value: Language;
  onChange: (value: Language) => void;
};

const languages: Language[] = ["EN", "ID", "JP"];

export default function LanguageSwitcher({ value, onChange }: Props) {
  const handleClick = () => {
    const currentIndex = languages.indexOf(value);
    const next = languages[(currentIndex + 1) % languages.length];

    onChange(next);
  };

  return (
    <button
      onClick={handleClick}
      className="
        flex items-center gap-2
        px-4 py-2
        rounded-full
        border
        bg-white
        hover:scale-105
        transition
        cursor-pointer
      "
    >
      <FaGlobe />
      <span>{value}</span>
    </button>
  );
}
