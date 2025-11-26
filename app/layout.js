"use client";

import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link'
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  let locale = 'fi'; // default locale

  if (pathname.startsWith('/en')) {
    locale = 'en';
  }

  let activeLocaleClass = `active-lang-${locale}`;

  return (
    <html lang={locale}>
      <body>
        <div className="brand-stripe"></div>
        <header role="banner">
          <div className="header-wrapper">
            <div className="region region-header">
              <div id="block-sitebranding" className="block block-system block-system-branding-block">
                <Link href="/" rel="home" className="site-logo">
                  <Image src={`site-logo.svg`} alt="Etusivu" width="164" height="62" />
                </Link>
              </div>

              <div className={activeLocaleClass}
                   id="block-ouka-language-switcher">


                <ul className="links">
                  <li className="fi">
                    <Link href="/" className="language-link" hrefLang="fi">
                      Suomi
                    </Link>
                  </li>
                  <li className="en">
                    <Link href="/en" className="language-link" hrefLang="en">
                      English
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>


        <div className="dialog-off-canvas-main-canvas">
          {children}
        </div>

      </body>
    </html>
  );
}
