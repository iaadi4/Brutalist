import philosophyData from "@/data/philosophy.json";

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-brutal-black)] text-[var(--color-brutal-white)] selection:bg-[var(--color-brutal-red)] selection:text-white">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-end p-8 lg:p-16 border-b-[8px] border-[var(--color-brutal-white)] relative overflow-hidden">
        <h1 className="text-massive text-[var(--color-brutal-white)] z-10 relative">
          ETHOS<br/>NOT<br/>AESTHETIC
        </h1>
        {/* Huge abstract structural graphic */}
        <div className="absolute top-10 right-10 w-96 h-96 border-[16px] border-[var(--color-brutal-gray-900)] translate-x-20 -translate-y-20 rotate-12 z-0" />
        <div className="absolute bottom-10 right-32 w-64 h-64 border-[16px] border-[var(--color-brutal-yellow)] opacity-20 z-0" />
      </section>

      {/* Grid Layout for Manifestos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b-[8px] border-[var(--color-brutal-white)]">
        <div className="p-8 lg:p-16 border-r-0 lg:border-r-[8px] border-[var(--color-brutal-white)] border-b-[8px] lg:border-b-0">
          <h2 className="text-5xl font-black text-[var(--color-brutal-cyan)] uppercase mb-6">{philosophyData.core_ethos.title}</h2>
          <div className="bg-white text-black font-mono font-bold px-4 py-2 inline-block mb-8 brutal-border">
            {philosophyData.core_ethos.originators}
          </div>
          <p className="text-2xl font-medium text-justify text-[var(--color-brutal-gray-100)]">
            {philosophyData.core_ethos.description}
          </p>
        </div>
        
        <div className="p-8 lg:p-16 bg-[var(--color-brutal-gray-900)]">
          <h2 className="text-5xl font-black text-[var(--color-brutal-yellow)] uppercase mb-6">{philosophyData.team_10.manifesto}</h2>
          <p className="text-2xl font-medium text-justify text-[var(--color-brutal-gray-100)] mt-auto">
            {philosophyData.team_10.significance}
          </p>
        </div>
      </div>

      {/* Full width Economics block */}
      <section className="p-8 lg:p-16 border-b-[8px] border-[var(--color-brutal-white)] bg-[var(--color-brutal-red)] text-white">
        <h2 className="text-6xl font-black uppercase mb-8">{philosophyData.economics.context}</h2>
        <p className="text-3xl font-black max-w-5xl leading-tight">
          {philosophyData.economics.impact}
        </p>
      </section>

      {/* Timeline Downfall & Revival */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 lg:p-16 border-r-0 lg:border-r-[8px] border-b-[8px] lg:border-b-0 border-[var(--color-brutal-white)] bg-[var(--color-brutal-white)] text-[var(--color-brutal-black)] selection:bg-[var(--color-brutal-black)] selection:text-white">
          <h3 className="text-4xl font-black uppercase mb-4">THE DOWNFALL</h3>
          <h4 className="font-mono text-xl font-bold bg-[var(--color-brutal-black)] text-white inline-block px-3 py-1 mb-8">{philosophyData.timeline.downfall.era}</h4>
          <ul className="space-y-6">
            {philosophyData.timeline.downfall.factors.map((factor, idx) => {
              const [prefix, rest] = factor.split(': ');
              return (
                <li key={idx} className="text-xl font-medium border-l-[6px] border-[var(--color-brutal-black)] pl-4">
                  <span className="font-black uppercase">{prefix}:</span> {rest}
                </li>
              );
            })}
          </ul>
        </div>
        
        <div className="p-8 lg:p-16 bg-[var(--color-brutal-black)] flex flex-col justify-center">
          <h3 className="text-4xl font-black uppercase text-[var(--color-brutal-cyan)] mb-4">THE REVIVAL</h3>
          <div className="flex gap-4 mb-8">
            <span className="font-mono text-xl font-bold border-2 border-[var(--color-brutal-cyan)] px-3 py-1">{philosophyData.timeline.revival.era}</span>
            <span className="font-mono text-xl font-bold bg-[var(--color-brutal-cyan)] text-black px-3 py-1">{philosophyData.timeline.revival.movement}</span>
          </div>
          <p className="text-2xl font-medium text-[var(--color-brutal-gray-100)] leading-relaxed">
            {philosophyData.timeline.revival.context}
          </p>
        </div>
      </div>
    </div>
  );
}
