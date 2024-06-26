"use client";

import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation';
import Image from 'next/image'
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
                <a href="/" rel="home" className="site-logo">
                  <Image src={`site-logo.svg`} alt="Etusivu" width="164" height="62" />
                </a>
              </div>

              <div className={activeLocaleClass}
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

        <footer role="contentinfo">
          <div className="region region-footer">
            <div id="block-primary-footer-block">

              <div className="footer primary">
                <div className="footer__container">
                  <div className="footer__top-row">
                    <div className="footer__top-row__logo"></div>
                  </div>
                  <div className="footer__bottom-row">
                    <div className="footer__bottom-row__columns">
                      <div className="footer__bottom-row__columns__column column">
                        <h3>Oulun kaupunki</h3>
                        <p>Puhelin&nbsp;<strong>08 558 410</strong>&nbsp;(vaihde)</p>
                        <p>Oulun kaupungin kirjaamo<br />PL 71<br />90015 Oulun kaupunki<br/>Sähköpostiosoite: kirjaamo@ouka.fi</p>
                      </div>
                      <div className="footer__bottom-row__columns__column column">
                        <h3>Asiakaspalvelu</h3>
                        <p>Käyntiosoite:<br />Oulu10,&nbsp;<strong>Torikatu 10, Oulu</strong></p>
                        <p>Puhelin:&nbsp;<strong>08
                          558 558 00</strong></p>
                        <p>Sähköpostiosoite: oulu10@ouka.fi</p>
                      </div>
                      <div className="footer__bottom-row__columns__column column">
                        <h3>Poiminnat</h3>
                        <p><a href="https://www.visitoulu.fi/" rel="nofollow">Matkailijan
                        palvelusivut (visitoulu.fi)</a></p>
                        <h3>Palvelutietoa eri kielillä&nbsp;<br />InfoFinland-sivustolla</h3>
                        <p>
                          <a href="https://www.infofinland.fi/en/oulu" title="englanti"
                            rel="nofollow">English</a>
                          &nbsp;|&nbsp;
                          <a href="https://www.infofinland.fi/ru/oulu" title="venäjä" rel="nofollow">Pусский</a>
                          &nbsp;|&nbsp;
                          <a href="https://www.infofinland.fi/zh/oulu" title="kiina" rel="nofollow">中文</a>
                          &nbsp;|&nbsp;
                          <a href="https://www.infofinland.fi/ar/oulu" title="arabia"
                             rel="nofollow">العربية</a>
                          &nbsp;|&nbsp;
                          <a href="https://www.infofinland.fi/fi/oulu" title="suomi" rel="nofollow">Suomi</a>
                        </p>
                        <p>&nbsp;</p>
                      </div>
                      <div className="footer__bottom-row__columns__logo-container column">
                        <Image className="footer__bottom-row__columns__logo-container__logo" src={`footer_sphere.svg`} alt="Ouka.fi footer logo" width="335" height="335" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </footer>

      </body>
    </html>
  );
}
