import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GoArrowLeft } from "react-icons/go";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <motion.button
        onClick={() => navigate(-1)}
        whileHover="hover"
        initial="rest"
        animate="rest"
        whileTap={{ scale: 0.97 }}
        className="
    relative overflow-hidden
    flex items-center gap-2
    px-5 py-2
    rounded-full
    border border-gray-200
    text-gray-700
    font-medium
    cursor-pointer
    hover:text-white
  "
      >
        {/* BACKGROUND ANIMATION */}
        <motion.div
          variants={{
            rest: { width: 0 },
            hover: { width: "100%" },
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
      absolute right-0 top-0 h-full
      bg-black
      z-0
    "
        />

        {/* CONTENT */}
        <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
          <GoArrowLeft size={18} /> Kembali
        </span>
      </motion.button>
    </div>
  );
}
