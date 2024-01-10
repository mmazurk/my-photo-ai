import Head from "next/head";
import Navbar from "../components/layout/navbar";
import HomePage from "../components/home-page/homepage";

export default function Home() {
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
