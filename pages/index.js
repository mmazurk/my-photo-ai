import Head from "next/head";
import HomePage from "../components/home-page/homepage";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Home() {
  console.log("Base URL is", BASE_URL);
  return (
    <>
      <Head>
        <title>My Ai Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
