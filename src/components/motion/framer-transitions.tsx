"use client"

import { motion } from "framer-motion"

export function PageTransition({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 10,
        mass: 0.5
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
