// import { signIn, useSession, signOut, getSession } from "next-auth/react"
import Link from 'next/link';
import axios from 'axios';
import useSWR from "swr"

export default function Home() {
  
  const fetcher = (at) => axios.get(at)
  const {data,error,isLoading} = useSWR("/api/data",fetcher)
  console.log(data,error)
  return (
    <>
    <p className="text-3xl text-blue-600">Hello</p>
    </>
  );
}

