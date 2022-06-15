import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ExpenseItem from "./components/ExpenseItem";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Expenses App - V2</title>
        <meta name="description" content="Expenses App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ExpenseItem/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by me
        </a>
      </footer>
    </div>
  );
}
