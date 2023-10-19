import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/navigation/navigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className='container mt-5'>
      <h1 className='text-center'>This is the home page.</h1>
      </main>
    </>
  )
}
