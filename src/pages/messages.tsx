import type { ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";
import Logo from "../assets/lbc-logo.webp";
import styles from "../styles/Home.module.css";
import useFetch from "../utils/useFetch";
import { useRouter } from "next/router";
import { MESSAGES_API_URL } from "../utils/constants";
import { Message } from "../types/message";
import { Loader } from "../components/Loader";
import { MessageContent } from "../components/MessageContent";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import { SendMessage } from "../components/SendMessage";
import { Header } from "../components/Header";

const Messages = (): ReactElement => {
  const userId = getLoggedUserId();
  const { query } = useRouter();
  const [messages, loading] = useFetch(`${MESSAGES_API_URL}`);

  if (loading) {
    return <Loader />;
  }

  const conversMessages: Message[] = messages?.filter(
    ({ conversationId }: Message) =>
      conversationId === parseInt(query.conversationId as string)
  );
  return (
    <div>
      <Head>
        <title>Liste des messages</title>
        <meta
          name="description"
          content="Frontend exercise for developpers who want to join us on leboncoin.fr"
        ></meta>
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>List des messages</h1>
        <br />
        <br />
        {conversMessages.map(({ id, authorId, body, timestamp }) => (
          <MessageContent
            key={id}
            authorId={authorId}
            body={body}
            timestamp={timestamp}
            isReceived={authorId !== userId}
          />
        ))}
        <br />
        {/* <SendMessage /> */}
      </main>
    </div>
  );
};

export default Messages;
