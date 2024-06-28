import Image from "next/image";
import styles from "./page.module.css";
import { GraphQLClient } from 'graphql-request';

export const metadata = {
    title: "Oukan vara-sivusto",
    description: "Vara-sivusto on käytössä silloin kun pääsivustolla on teknisiä ongelmia.",
};

async function getData() {
  const hygraph = new GraphQLClient(
      'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clxn0unex005607umwr3z4tbu/master',
      {
        method: 'POST'
      }
  );

  const query = `query PageContents {
    pageContents(locales: fi_FI) {
        content {
          html
        }
      }
    }`;

  const data = await hygraph.request(query);
  return data.pageContents[0].content.html
}

export default async function Home() {
  const data = await getData();
  const markup = { __html: data };

  return (
    <div className="layout-container">
        <main role="main">
          <h1 className="site-title">Vara.ouka.fi</h1>
          <div dangerouslySetInnerHTML={markup} />
        </main>

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
    </div>

  );
}