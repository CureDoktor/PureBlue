import Head from "next/head";
import { React } from "react";
import styles from "../styles/Home.module.scss";

import HomePage from "../components/Home";
export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pure Blue</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/faviconn.ico" />
      </Head>
      <main>
        <HomePage props={props} />
      </main>
    </div>
  );
}
