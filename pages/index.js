import Head from "next/head";
import Navbar from "@/navigation/navigation";
import HomePage from "@/library/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Ai Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomePage />
    </>
  );
}
