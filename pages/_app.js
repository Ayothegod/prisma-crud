import '@/styles/globals.css'
import Head from 'next/head'
import { Toaster } from "@/n/ui/toaster"

import { UserContextProvider } from '../hooks/hooks'
import { SessionProvider } from "next-auth/react"

export default function App(
  { Component, pageProps: { session, ...pageProps },
  }) {
  return (
    <>
    <Head>
        <title>Prisma crud</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <SessionProvider session={session}>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </SessionProvider>
    </>
  )
}
