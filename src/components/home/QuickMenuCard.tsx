import type { ReactNode } from "react";
import { FaChevronRight } from "react-icons/fa";

type Props = {
  icon: ReactNode;
  title: string;
  desc: string;
  href: string;
  color: string;
};

export default function QuickMenuCard({
  icon,
  title,
  desc,
  href,
  color,
}: Props) {
  return (
    <a
      href={href}
      className="
        group p-5 rounded-2xl border
        bg-white border-gray-200
        transition hover:scale-105
      "
    >
      <div className="flex justify-between items-center">
        <div className={`text-2xl p-3 rounded-md bg-black/4 ${color}`}>
          {icon}
        </div>

        <FaChevronRight className="opacity-40" />
      </div>

      <h3 className="mt-4 font-bold text-lg mb-1">{title}</h3>

      <p className="text-base opacity-60">{desc}</p>
    </a>
  );
}
