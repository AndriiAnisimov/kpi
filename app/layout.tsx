import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Next.js Project",
  description: "A Next.js project with TypeScript and TailwindCSS.",
  keywords: "Next.js, TypeScript, TailwindCSS"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-slate-50`}>
        <main className="max-w-3xl mt-4 mx-auto">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
