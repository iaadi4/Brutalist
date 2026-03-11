import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GlobalNav } from "@/components/layout/global-nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRUTALISM: Ethic, Not Aesthetic",
  description: "An interactive, deep-dive archive into the global history of Brutalist Architecture.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-[var(--color-brutal-yellow)] selection:text-[var(--color-brutal-black)] flex flex-col min-h-screen bg-[var(--color-brutal-bg)]`}
      >
        <div className="flex-1 flex flex-col relative w-full max-w-[100vw] overflow-x-hidden">
          <GlobalNav />
          <main className="flex-1 w-full relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
