import Image from "next/image";
import styles from "..//page.module.css";
import { GraphQLClient } from 'graphql-request';

export const metadata = {
    title: "Ouka backup site",
    description: "The backup site is used when the main site has technical problems.",
};

async function getData() {
  const hygraph = new GraphQLClient(
      'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clxn0unex005607umwr3z4tbu/master',
      {
        method: 'POST'
      }
  );

  const query = `query PageContents {
    pageContents(locales: en) {
        content {
          html
        }
      }
    }`;

  const data = await hygraph.request(query);
  return data.pageContents[0].content.html ?? ''
}

export default async function Page() {
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
                                        <h3>City of Oulu, Finland</h3>
                                        <p>Phone&nbsp;<strong>08 558 410</strong>&nbsp;(exchange)</p>
                                        <p>Email: kirjaamo@ouka.fi</p>
                                    </div>
                                    <div className="footer__bottom-row__columns__column column">
                                        <h3>Oulu in your language</h3>
                                        <p>InfoFinland.fi:<br />
                                            <a href="https://www.infofinland.fi/en/oulu" title="englanti" rel="nofollow">English</a>&nbsp;|&nbsp;
                                            <a href="https://www.infofinland.fi/ru/oulu" title="venäjä" rel="nofollow">Pусский</a>&nbsp;|&nbsp;
                                            <a href="https://www.infofinland.fi/zh/oulu" title="kiina" rel="nofollow">中文</a>&nbsp;|&nbsp;
                                            <a href="https://www.infofinland.fi/ar/oulu" title="arabia" rel="nofollow">العربية</a>&nbsp;|&nbsp;
                                            <a href="https://www.infofinland.fi/fi/oulu" title="suomi" rel="nofollow">Suomi</a>
                                        </p>
                                    </div>
                                    <div className="footer__bottom-row__columns__column column">
                                        <h3>See also</h3>
                                        <p><a href="https://www.visitoulu.fi/en/" rel="nofollow">Tourist information (visitoulu.fi)</a></p>
                                        <p><a href="https://www.businessoulu.com/en" rel="nofollow">Business Oulu (businessoulu.com)</a></p>
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