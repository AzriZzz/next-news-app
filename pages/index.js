import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home </title>
        <meta
          name="description"
          content="News app build using Next.js"
        />

        <meta property="og:image" content={`${process.env.HOST}/images/home.png`} />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="News app build using Next.js"
        />

        <meta property="twitter:image" content={`${process.env.HOST}/images/home.png`} />
        <meta property="twitter:title" content="Home" />
        <meta
          property="twitter:description"
          content="News app build using Next.js"
        />
      </Head>
      <div className="page-container">
        <Navbar />
        <div className={styles.main}>
          <h1>Next.js News App</h1>
          <h3>Your one stop shop for the latest news articles on Sport</h3>
        </div>
      </div>
    </div>
  );
}
