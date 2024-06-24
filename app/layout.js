"use client";

import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  let locale = 'fi'; // default locale

  if (pathname.startsWith('/en')) {
    locale = 'en';
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
