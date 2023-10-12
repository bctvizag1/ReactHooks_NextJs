import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Rect Hooks with Next JS</h1>
        <ol>
          <li>
            <Link rel="stylesheet" href="/useEffectHook">
              UseEffect Hook
            </Link>
          </li>
        </ol>
      </main>
    </>
  );
}
