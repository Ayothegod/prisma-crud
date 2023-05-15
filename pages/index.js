import Head from 'next/head'
import React from 'react';
import { signIn, useSession, signOut, getSession } from "next-auth/react"
import { useRouter } from "next/router"
import Link from 'next/link';
import axios from 'axios';

export default function Home() {
  const router = useRouter()
  const { data: session, status } = useSession()
  // console.log(session);
  console.log("hello");

  const postData = async () => {
    try {
      const body = { name: "favour",age: 202}
      const response = await fetch("/api/routes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  postData()

  // const getData = async () => {
  //   try {
  //     const response = await axios.get('/api/routes');
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // getData()

  const signout = () => {
    signOut({ callbackUrl: 'http://localhost:3000/auth' })
  }

  if (status === "loading") {
    return (
      <>
        <p>Loading stuff</p>
      </>
    )
  }
  if (status === "unauthenticated") {
    return (
      <>
        <p>No allowed access</p>
        <Link href='/auth'>Sign in to access stuffs</Link>
      </>
    )
  }

  return (
    <>
      <main className="h-full text-center space-y-2">
        <p>{session ? session?.user.email : "No user"}</p>
        <button onClick={signout}>sign out</button>
        <h1 className='text-2xl '>Lets Cook, this dou, its amazing</h1>
      </main>
    </>
  );
}

// export async function getServerSideProps({req}) {
//   const session = await getSession({req})

//   // const session = await use

//   if(!session){
//     return {
//       redirect:{
//         destination:"/auth",
//         permanent:false
//       }
//     }
//   }

//   return{
//     props:{

//     }
//   }
// }
