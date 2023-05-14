import Head from 'next/head'
import React from 'react';
import { signIn, useSession, signOut, getSession } from "next-auth/react"
import { useRouter } from "next/router"
import Link from 'next/link';


export default function Home() {
  const router = useRouter()
  const { data: session, status } = useSession()
  console.log(session);
  console.log([status]);

  const signout = () => {
    signOut({ callbackUrl: 'http://localhost:3000/auth' })
    // router.push("/auth")
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
