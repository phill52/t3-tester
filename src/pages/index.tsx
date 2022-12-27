import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Phillip Anerine | Full Stack Developer </title>
        <meta name="description" content="Hello, strange to see you in the metadata. I'm Phillip Anerine, currently a Computer Science major at
        Stevens Institute of Technology, and aspiring full stack developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Phillip <span className={styles.whiteSpan}>Anerine</span>
          </h1>
        </div>
      </main>
    </>
  );
};

export default Home;
