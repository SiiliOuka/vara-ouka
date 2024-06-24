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
  return data.pageContents[0].content.html
}

export default async function Page() {
  const data = await getData();
  const markup = { __html: data };

  return (
    <div className="layout-container">
      <h1 className="site-title">Vara.ouka.fi</h1>
      <div dangerouslySetInnerHTML={markup} />
    </div>
  );
}