import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 lg:p-24 space-y-16">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-massive bg-[var(--color-brutal-yellow)] inline-block p-4 brutal-border shadow-[12px_12px_0px_#000]">
          BRUTALISM
        </h1>
        <p className="text-2xl font-mono uppercase font-black bg-[var(--color-brutal-black)] text-[var(--color-brutal-white)] p-4 brutal-border">
          An Ethic, Not An Aesthetic
        </p>
      </div>

      <Separator className="max-w-5xl" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        <Card>
          <CardHeader>
            <CardTitle>System Test</CardTitle>
            <CardDescription>Validating component architecture</CardDescription>
          </CardHeader>
          <CardContent>
            The raw formwork of the internet. We are exposing the mechanical logic of
            the DOM. No smoothed edges. No soft shadows.
          </CardContent>
          <CardFooter className="justify-end gap-4">
            <Button variant="outline">ABORT</Button>
            <Button variant="default">ENGAGE</Button>
          </CardFooter>
        </Card>

        <div className="flex flex-col gap-6 justify-center">
          <Button variant="accent" size="massive" className="w-full">
            INITIALIZE SEQUENCE
          </Button>
          <Button variant="destructive" size="lg" className="w-full">
            PURGE CACHE
          </Button>
        </div>
      </div>
    </div>
  );
}
