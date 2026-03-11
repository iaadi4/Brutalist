import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/history", label: "Origins" },
  { href: "/philosophy", label: "Ethos" },
  { href: "/global-gallery", label: "Global" },
  { href: "/india", label: "India" },
];

export function GlobalNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full brutal-border-b bg-[var(--color-brutal-bg)] border-b-[6px] border-[var(--color-brutal-black)] shadow-[0px_4px_0px_#000]">
      <div className="flex flex-col md:flex-row w-full justify-between items-stretch">
        <Link 
          href="/" 
          className="p-4 md:p-6 bg-[var(--color-brutal-red)] text-[var(--color-brutal-white)] border-b-[4px] md:border-b-0 md:border-r-[6px] border-[var(--color-brutal-black)] group overflow-hidden relative min-w-[300px]"
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none whitespace-nowrap">
              B/RUTAL
            </h1>
            <p className="font-mono text-xs font-bold leading-none mt-2 opacity-90 tracking-widest text-[var(--color-brutal-yellow)]">
              ETHIC / NOT / AESTHETIC
            </p>
          </motion.div>
        </Link>
        
        <nav className="flex-1 flex overflow-x-auto items-stretch no-scrollbar">
           <ul className="flex w-full items-stretch h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href} className="flex-1 min-w-[120px] flex items-stretch border-r-[4px] border-[var(--color-brutal-black)] last:border-r-0 relative">
                  <Link href={link.href} className="w-full flex">
                    <button 
                      className={`w-full h-full flex items-center justify-center font-bold uppercase transition-colors px-4 py-8 md:py-6 text-sm md:text-xl border-none outline-none focus:ring-4 focus:ring-inset focus:ring-[var(--color-brutal-yellow)]
                        ${isActive 
                          ? "bg-[var(--color-brutal-black)] text-[var(--color-brutal-yellow)]" 
                          : "bg-transparent text-[var(--color-brutal-black)] hover:bg-[var(--color-brutal-cyan)]"
                        }
                      `}
                    >
                      <span className="relative z-10">{link.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-2 bg-[var(--color-brutal-yellow)]"
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                      )}
                    </button>
                  </Link>
                </li>
              );
            })}
           </ul>
        </nav>
      </div>
    </header>
  );
}
