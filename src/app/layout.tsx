import type { Metadata, Viewport } from "next";
import { Fredoka } from "next/font/google";
import Link from "next/link";
import { LoginGate } from "@/components/LoginGate";
import { SeasonNav } from "@/components/SeasonNav";
import { seasons } from "@/content";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sæsonkalender – 0. klasse",
    template: "%s · Sæsonkalender",
  },
  description: "Julekalender, påskeæggejagt, halloween, fastelavn og sommer – sjove facts til 0. klasse.",
};

export const viewport: Viewport = {
  themeColor: "#fff7ed",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="da" className={`${fredoka.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LoginGate>
          <header className="site-header">
            <Link href="/" className="site-logo">
              <span aria-hidden>🗓️</span> Sæsonkalender
            </Link>
            <SeasonNav seasons={seasons.map(({ id, name, emoji }) => ({ id, name, emoji }))} />
          </header>
          {children}
        </LoginGate>
      </body>
    </html>
  );
}
