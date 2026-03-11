import Link from "next/link";
import { Button } from "@/components/ui/button";

export function GlobalNav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-[8px] border-[var(--color-brutal-black)] bg-[var(--color-brutal-white)] flex flex-wrap lg:flex-nowrap">
      <div className="flex-1 border-r-[8px] border-[var(--color-brutal-black)] px-6 py-4 flex items-center min-w-[300px]">
        <Link href="/" className="text-4xl font-black uppercase tracking-tighter hover:text-[var(--color-brutal-red)] transition-colors">
          B/RUTAL
        </Link>
      </div>
      
      <div className="flex w-full lg:w-auto">
        <Link href="/history" className="flex-1 lg:flex-none">
          <Button variant="ghost" className="w-full h-full min-h-[80px] rounded-none border-r-[4px] border-[var(--color-brutal-black)] text-xl hover:bg-[var(--color-brutal-yellow)] brutal-border-none shadow-none translate-x-0 translate-y-0 active:translate-x-0 active:translate-y-0 active:shadow-none hover:shadow-none">
            ORIGINS
          </Button>
        </Link>
        <Link href="/philosophy" className="flex-1 lg:flex-none">
          <Button variant="ghost" className="w-full h-full min-h-[80px] rounded-none border-r-[4px] border-[var(--color-brutal-black)] text-xl hover:bg-[var(--color-brutal-cyan)] brutal-border-none shadow-none translate-x-0 translate-y-0 active:translate-x-0 active:translate-y-0 active:shadow-none hover:shadow-none">
            ETHOS
          </Button>
        </Link>
        <Link href="/global-gallery" className="flex-1 lg:flex-none">
          <Button variant="ghost" className="w-full h-full min-h-[80px] rounded-none border-r-[4px] border-[var(--color-brutal-black)] text-xl hover:bg-[var(--color-brutal-red)] hover:text-white brutal-border-none shadow-none translate-x-0 translate-y-0 active:translate-x-0 active:translate-y-0 active:shadow-none hover:shadow-none">
            GLOBAL
          </Button>
        </Link>
        <Link href="/india" className="flex-1 lg:flex-none">
          <Button variant="ghost" className="w-full h-full min-h-[80px] rounded-none text-xl hover:bg-[var(--color-brutal-black)] hover:text-white brutal-border-none shadow-none translate-x-0 translate-y-0 active:translate-x-0 active:translate-y-0 active:shadow-none hover:shadow-none">
            INDIA
          </Button>
        </Link>
      </div>
    </nav>
  );
}
