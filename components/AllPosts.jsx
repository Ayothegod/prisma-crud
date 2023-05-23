import { useEffect, useState } from "react";
import SinglePosts from "./SinglePosts";


const AllPosts = () => {

  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState("")
  const [error,setError] = useState("")
  useEffect(() => {
    try {
      const res = async() => {
        await fetch("api/routes")
        .then(res => res.json())
        .then(res =>  console.log(res))
      }
      res()
    } catch (error) {
      setError(error.message)
    }
  },[])


  return (
    <div className="w-full sm:w-2/3 ">
      <p className="text-xl font-semibold md:text-2xl">Your Feed</p>
      <div className="flex flex-col gap-1 ">

      {/* {
        allPosts.map((post) => (
          <SinglePosts key={post.id} post={post}/>
        ))
      } */}
      {/* {
        allPosts.map((post) => (
          <SinglePosts key={post.id} post={post}/>
        ))
      }
      {
        allPosts.map((post) => (
          <SinglePosts key={post.id} post={post}/>
          ))
        } */}
        </div>
    </div>
  )
}

export default AllPosts