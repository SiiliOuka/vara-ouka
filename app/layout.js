"use client";

import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation';
import Image from 'next/image'
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
      <body>
        <div className="brand-stripe"></div>
        <header role="banner">
          <div className="header-wrapper">
            <div className="region region-header">
              <div id="block-sitebranding" className="block block-system block-system-branding-block">
                <a href="/" rel="home" className="site-logo">
                  <Image src={`site-logo.svg`} alt="Etusivu" width="164" height="62" />
                </a>
              </div>

              <div className="language-switcher-language-url block block-ouka-blocks block-custom-language-block"
                   id="block-ouka-language-switcher">


                <ul className="links">
                  <li className="fi">
                    <a href="/" className="language-link" hrefLang="fi">
                      Suomi
                    </a>
                  </li>
                  <li className="en">
                    <a href="/en" className="language-link" hrefLang="en">
                      English
                    </a>
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
