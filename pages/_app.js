import '@/styles/globals.css'
import Head from 'next/head'
// import { SessionProvider } from "next-auth/react"

export default function App(
  { Component, pageProps: { session, ...pageProps },
  }) {
  return (
    <>
    <Head>
        <title>prisma test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

{/* <SessionProvider session={session}> </SessionProvider> */}