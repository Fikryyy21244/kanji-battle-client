import { motion } from "framer-motion";

type Props = {
  title: string;
  href: string;
};

export default function LearningMenuItem({ title, href }: Props) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover="hover"
      className="
        relative flex items-center justify-between
        px-4 py-14
        border-t
        overflow-hidden
      "
    >
      <motion.div
        className="relative z-10"
        variants={{
          hover: { x: 8 },
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h1 className="font-rock-n-roll text-4xl uppercase">{title}</h1>
      </motion.div>

      <motion.div
        className="
          absolute left-0 top-0 h-full
          bg-black/5
          origin-left
        "
        initial={{ width: 0 }}
        variants={{
          hover: {
            width: "100%",
          },
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
      />
    </motion.a>
  );
}
