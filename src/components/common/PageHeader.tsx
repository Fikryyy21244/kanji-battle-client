import type { ReactNode } from "react";
import { motion } from "framer-motion";

type PageHeaderProps = {
  children?: ReactNode;
  color?: string;
};

export default function PageHeader({
  children,
  color = "text-black",
}: PageHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <h1 className={`text-5xl font-rock-n-roll font-bold ${color}`}>
        {children}
      </h1>

      {/* Animated strip (horizontal) */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-[4px] w-full bg-black rounded-full origin-left"
      />
    </div>
  );
}
