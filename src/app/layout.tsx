import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mieterportal",
  description: "Zugriff auf Wohnung, Dokumente und Kontakt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 🧭 Navigation */}
        <header className="bg-gray-100 border-b p-4 shadow-sm sticky top-0 z-10">
          <nav className="max-w-4xl mx-auto flex gap-6 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:underline">Start</Link>
            <Link href="/wohnung" className="hover:underline">Wohnung</Link>
            <Link href="/dokumente" className="hover:underline">Dokumente</Link>
            <Link href="/kontakt" className="hover:underline">Kontakt</Link>
          </nav>
        </header>

        {/* 📄 Seiteninhalt */}
        <main className="max-w-4xl mx-auto mt-8 px-4">{children}</main>
      </body>
    </html>
  );
}
