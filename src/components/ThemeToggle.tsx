"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-light-hover dark:bg-dark-hover border border-light-border dark:border-dark-border transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          x: theme === "dark" ? 26 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="absolute top-1 w-5 h-5 rounded-full bg-white dark:bg-dark-text shadow-sm flex items-center justify-center"
      >
        {theme === "dark" ? (
          <Moon size={12} className="text-primary" />
        ) : (
          <Sun size={12} className="text-yellow-500" />
        )}
      </motion.div>
    </button>
  );
}
