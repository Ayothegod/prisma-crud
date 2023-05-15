import Head from 'next/head'
import React, { useState } from 'react';
import { signIn, useSession, signOut, getSession } from "next-auth/react"
import { useRouter } from "next/router"
import Link from 'next/link';
import axios from 'axios';
import CreatePosts from '@/components/CreatePosts';
import AllPosts from '@/components/AllPosts';

export default function Home() {
  const router = useRouter()
  const { data: session, status } = useSession()
  console.log(session);

  const signout = () => {
    signOut({ callbackUrl: 'http://localhost:3000/auth' })
  }

  if (status === "loading") {
    return (
      <>
        <p>Loading ...</p>
      </>
    )
  }
  // if (status === "unauthenticated") {
  //   return (
  //     <div className='flex items-center justify-center min-h-screen p-4'>
  //       <p>No allowed access</p>
  //       <Link href='/auth'>Sign in access this route</Link>
  //     </div>
  // <p>{session ? session?.user.email : "No user"}</p>
  //   )
  // }

  return (
    <>
      <main className="h-full">
        <section>
          <nav>
            <h1>Postr</h1>
            <div>
              {session ? <p>Signed in as: {session && session?.user.email}</p> : <p>Not signed in yet? <Link href='/auth'></Link></p>}
            </div>
          </nav>

        </section>
        <section>
          <AllPosts/>
          <CreatePosts/>
        </section>
        <button onClick={signout}>sign out</button>
        {
          status === "authenticated" ?
            <div>You can create posts</div> :
            <div>you cant create post yet</div>
        }
        {/* <p>this is  age{data.age}</p> */}
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
