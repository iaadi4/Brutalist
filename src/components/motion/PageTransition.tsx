"use client";

import { motion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.02, y: -15 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
        mass: 1,
      }}
    >
      {children}
    </motion.div>
  );
}
