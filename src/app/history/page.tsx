import originsData from "@/data/origins.json";
import { Separator } from "@/components/ui/separator";

export default function OriginsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-8 lg:p-16 bg-[var(--color-brutal-yellow)] border-b-[8px] border-[var(--color-brutal-black)]">
        <h1 className="text-massive max-w-[90vw] break-words">ORIGINS</h1>
        <p className="text-3xl font-mono font-black mt-8 max-w-3xl">
          THE RAW CORE. THE SWEDISH PRECEDENT. THE MORAL IMPERATIVE.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 flex-1">
        {/* Abstract Sidebar */}
        <aside className="col-span-1 lg:col-span-3 border-r-[8px] border-[var(--color-brutal-black)] bg-[var(--color-brutal-gray-100)] p-8 hidden lg:block">
           <div className="text-raw rotate-90 origin-left translate-x-12 translate-y-32 tracking-[0.5em] text-[var(--color-brutal-gray-900)] opacity-40">
             BÉTON_BRUT // 1952 // NYBRUTALISM // 1950 // THE_NEW_BRUTALISM // 1955
           </div>
        </aside>

        {/* Content Feed */}
        <div className="col-span-1 lg:col-span-9 flex flex-col">
          {originsData.origins.map((item, index) => (
            <article 
              key={item.id} 
              className={`p-8 lg:p-16 border-b-[8px] border-[var(--color-brutal-black)] relative overflow-hidden group ${index % 2 === 0 ? 'bg-[var(--color-brutal-white)]' : 'bg-[var(--color-brutal-bg)]'}`}
            >
              <div className="absolute top-0 right-0 p-4 bg-[var(--color-brutal-black)] text-[var(--color-brutal-white)] font-mono font-black text-2xl brutal-border translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
                {item.year}
              </div>
              
              <h2 className="text-5xl lg:text-7xl font-black uppercase mb-4 max-w-4xl tracking-tighter leading-[0.9]">
                {item.title}
              </h2>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-[var(--color-brutal-red)] text-white px-3 py-1 font-mono font-bold text-lg brutal-border-sm">
                  {item.figure}
                </span>
                <Separator orientation="horizontal" className="flex-1 bg-[var(--color-brutal-red)]" />
              </div>
              
              <p className="text-xl lg:text-2xl font-medium leading-relaxed max-w-4xl text-justify font-sans">
                {item.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
