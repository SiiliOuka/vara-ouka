import Image from "next/image";
import styles from "..//page.module.css";
import { GraphQLClient } from 'graphql-request';

export const metadata = {
    title: "City of Oulu's Backup Website",
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
          <div dangerouslySetInnerHTML={markup} />
        </main>

        <footer role="contentinfo">
            <div className="region region-footer">
                <div id="block-primary-footer-block">

                    <div className="footer primary">
                        <div className="footer__container">
                            <div className="footer__top-row">
                                <div className="footer__top-row__logo"></div>
                                <div className="footer__top-row__name">
                                    <h3>City of Oulu</h3>
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