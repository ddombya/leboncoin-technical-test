import type { ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";
import Logo from "../assets/lbc-logo.webp";
import styles from "../styles/Home.module.css";
import { ConversationsList } from "../components/ConversationsList";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import useFetch from "../utils/useFetch";
import { CONVERSATIONS_API_URL } from "../utils/constants";
import { Header } from "../components/Header";

const Home = (): ReactElement => {
  const userId = getLoggedUserId();
  const [conversations, loading] = useFetch(
    `${CONVERSATIONS_API_URL}${userId}`
  );
  const year = new Date().getFullYear();

  return (
    <div>
      <Head>
        <title>Liste des conversations</title>
        <meta
          name="description"
          content="Frontend exercise for developpers who want to join us on leboncoin.fr"
        ></meta>
      </Head>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Liste des conversations</h1>
        <br />
        <br />
        <ConversationsList />
      </main>
    </div>
  );
};

export default Home;
