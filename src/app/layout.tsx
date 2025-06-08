import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Falls du Tailwind nutzt

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mieterportal",
  description: "Ihr persönliches Portal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="p-4 border-b flex gap-6">
          <Link href="/">Start</Link>
          <Link href="/wohnung">Wohnung</Link>
          <Link href="/dokumente">Dokumente</Link>
          <Link href="/kontakt">Kontakt</Link>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
