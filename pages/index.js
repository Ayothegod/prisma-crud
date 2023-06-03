// import { signIn, useSession, signOut, getSession } from "next-auth/react"
import Link from 'next/link';
import axios from 'axios';
import useSWR from "swr"
// import prisma from '@/db/prisma';

export default function Home({data}) {
  console.log({data});
  
  // const fetcher = (at) => axios.get(at)
  // const {data,error,isLoading} = useSWR("/api/data",fetcher)
  return (
    <div className='max-w-[30rem] mx-auto mt-20'>
    <p className="text-3xl text-blue-600">Hello</p>
    <section>
      {/* {
        error && "error fetching data"
      } */}
      {
        data && data.map(data => (
          <div key={data.id} className='flex gap-4'>
            <p className='font-bold text-lg'>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.id}</p>
          </div>
        ))
      }
    </section>
    </div>
  );
}

export async function getStaticProps(){
  const data = await prisma.data.findMany()
  return {
    props: {
      data : JSON.parse(JSON.stringify(data))
    }
  }
}