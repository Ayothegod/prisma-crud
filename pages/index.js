import Head from 'next/head'
import React, { useState } from 'react';
import { signIn, useSession, signOut, getSession } from "next-auth/react"
import { useRouter } from "next/router"
import Link from 'next/link';
import axios from 'axios';
import CreatePosts from '@/components/CreatePosts';
import AllPosts from '@/components/AllPosts';
import prisma from '@/lib/prisma';
import Image from 'next/image';

export default function Home(allPosts) {
  // console.log({allPosts})
  const router = useRouter()
  const { data: session, status } = useSession()
  const [profile,setProfile] = useState(false)
  // console.log(session);

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
      <main className="min-h-screen bg-[#f4f4f4] text-[#383838]">
        <section className='flex items-center justify-center'>
          <nav className='bg-[#929292] shadow-lg z-10 rounded py-2 px-2 fixed top-2 w-11/12 mx-auto'>
            <div className='flex text-white items-center justify-between md:w-1/2 md:mx-auto'>

              <h1 className='text-purple-600 font-bold text-xl'>Postr</h1>
              <div>
                {session ?
                  <div>

                    <p>Signed in as: {session && session?.user.email}</p>
                    <Image src={session?.user.image} alt={session?.user.name}/>
                    {

                    }
                  </div>
                  : <p>Not signed in yet? <Link href='/auth'>sign-in</Link></p>}
              </div>
            </div>
          </nav>

        </section>

        <section className='mt-14 max-w-[62rem] mx-auto'>
          <AllPosts />
          <CreatePosts />
        </section>
        <button onClick={signout}>sign out</button>
        {
          status === "authenticated" ?
            <div>You can create posts</div> :
            <div>you cant create post yet</div>
        }
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

export async function getServerSideProps() {
  const allPosts = await prisma.Post.findMany()

  return {
    props: { allPosts }
  }
}
