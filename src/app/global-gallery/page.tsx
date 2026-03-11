import globalBuildingsData from "@/data/global-buildings.json";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function GlobalGalleryPage() {
  return (
    <div className="min-h-screen">
      <header className="p-8 lg:p-16 bg-[var(--color-brutal-black)] text-white border-b-[8px] border-[var(--color-brutal-white)] flex flex-col items-start gap-8 selection:bg-[var(--color-brutal-red)]">
        <h1 className="text-massive max-w-[90vw] break-words text-[var(--color-brutal-red)] uppercase leading-[0.8]">
          GLOBAL<br/>MONOLITHS
        </h1>
        <div className="bg-[var(--color-brutal-white)] text-black px-4 py-2 text-2xl font-mono font-black brutal-border">
          INDEX: 06 // WORLDWIDE STRENGTH
        </div>
      </header>

      <main className="p-8 lg:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {globalBuildingsData.map((building, index) => (
          <Card key={building.id} className={`flex flex-col brutal-shadow-hover ${index % 2 !== 0 ? 'bg-[var(--color-brutal-gray-100)]' : ''}`}>
            <CardHeader className={`${index % 3 === 0 ? 'bg-[var(--color-brutal-yellow)]' : index % 3 === 1 ? 'bg-[var(--color-brutal-cyan)]' : 'bg-[var(--color-brutal-white)] border-b-[8px]'}`}>
              <CardTitle className="tracking-tighter break-words">{building.name}</CardTitle>
              <CardDescription className="text-xl text-[var(--color-brutal-black)] bg-white/50 inline-block px-2">
                {building.architect} // {building.year}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 p-8 text-xl text-justify border-b-[4px] border-[var(--color-brutal-black)] font-medium">
              {building.technical_details}
            </CardContent>
            <CardFooter className="flex-col items-start bg-[var(--color-brutal-black)] text-white min-h-[100px] p-6 lg:p-8 justify-center gap-2 rounded-none border-t-0 border-[var(--color-brutal-black)] border-[4px] m-4 relative z-10 -mt-10 brutal-shadow">
              <span className="font-mono text-lg font-bold text-[var(--color-brutal-cyan)] block">{building.location}</span>
              <span className="font-mono text-sm block opacity-70">COORDS: {building.coordinates}</span>
            </CardFooter>
          </Card>
        ))}
      </main>
      
      {/* Decorative Structural Footer Grid */}
      <div className="h-64 border-t-[8px] border-[var(--color-brutal-black)] bg-[var(--color-brutal-yellow)] flex">
         <div className="flex-1 border-r-[8px] border-[var(--color-brutal-black)] bg-[var(--color-brutal-white)] h-full"></div>
         <div className="flex-1 border-r-[8px] border-[var(--color-brutal-black)] h-full relative">
            <div className="absolute inset-0 bg-[var(--color-brutal-black)] m-4 brutal-border"></div>
         </div>
         <div className="flex-1 bg-[var(--color-brutal-cyan)] h-full"></div>
      </div>
    </div>
  );
}
