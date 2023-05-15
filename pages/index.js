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
import Profile from '@/components/Profile';
import DesktopCreate from '@/components/DesktopCreate';
import MobileCreate from '@/components/MobileCreate';

export default function Home({allPosts,user}) {
  // console.log(user)
  const router = useRouter()
  const { data: session, status } = useSession()
  const [profile, setProfile] = useState(false)
  const [mobileCreate, setMobileCreate] = useState(false)
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

  return (
    <>
      <main className="min-h-screen bg-[#f4f4f4] text-[#383838]">
        <section className='flex items-center justify-center'>
          <nav className='bg-purple-500 shadow-lg z-10 rounded py-2 px-2 fixed top-2 w-11/12 mx-auto'>
            <div className='flex text-white items-center justify-between md:w-1/2 md:mx-auto'>

              <h1 className='text-white font-bold text-xl'>Postr</h1>
              <div>
                {session ?
                  <div onClick={() => setProfile(!profile)} className='flex items-center gap-2'>

                    <p>Signed in as: {session && session?.user.email}</p>
                    <div className="h-10 w-10 relative rounded-full overflow-hidden">

                    <Image src={session?.user.image} alt={session?.user.name} fill className='absolute' />
                    </div>
                    {
                      profile && <Profile />
                    }
                  </div>
                  : <p>Not signed in yet? <Link href='/auth'>sign-in</Link></p>}
              </div>
            </div>
          </nav>

        </section>

        <section className='mt-20 max-w-[62rem] mx-auto px-2'>
          <div>

            <AllPosts />
            <CreatePosts />
            <button onClick={signout}>sign out</button>
            {
              status === "authenticated" ?
                <div>You can create posts</div> :
                <div>you cant create post yet</div>
            }
          </div>
          <div className='hidden sm:block'>
            <div>
              <DesktopCreate/>
            </div>
          </div>
        </section>

        <section className='fixed bottom-4 right-4 sm:hidden'>
          <button className='bg-purple-500 text-white font-semibold px-2 py-2 rounded shadow-md hover:bg-purple-700' onClick={() => setMobileCreate(!mobileCreate)}>Create</button>
          {
            mobileCreate && 
            <MobileCreate/>
          }
        </section>
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
  const user = await prisma.user.findMany()

  return {
    props: { allPosts,user }
  }
}
