import Head from "next/head";
import HomePage from "../components/home/Home";
import styles from "../styles/Home.module.css";
import Details from "../components/home/Details";
import Header from "../components/home/Header";

function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Dislove</title>
        <meta
          name="description"
          content="Dislove Is A Dating And Friend Finding Bot Made To Boost Your Discord Experience And Probaly Find Your Love"
        />
        <link
          rel="icon"
          href="https://cdn.discordapp.com/attachments/882894510395379712/941617188077461564/image.jpg"
        />
      </Head>
      <Header />
      <HomePage />
      <Details />
    </div>
  );
}

export default Home;
