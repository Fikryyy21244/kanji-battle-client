import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function TopBar() {
  const { dark, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  return (
    <div className="flex justify-between items-center mb-10">
      <LanguageSwitcher value={language} onChange={setLanguage} />

      <ThemeToggle dark={dark} onToggle={toggleTheme} />
    </div>
  );
}
