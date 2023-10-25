import Head from "next/head";
import { Inter } from "next/font/google";

// import styles from "@/styles/Home.module.css";
import Link from "next/link";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
      </main>
    </>
  );
}