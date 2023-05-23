import { useEffect, useState } from "react";
import SinglePosts from "./SinglePosts";


const AllPosts = () => {

  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState("")
  useEffect(() => {
    try {
      const res = async() => {
        await fetch("api/routes")
        .then(res => res.json())
        .then(res => (setPosts(res),setLoading(false)))
      }
      res()
    } catch (error) {
      setError(error.message)
    }
  },[])
  console.log(posts)


  return (
    <div className="w-2/3 sm:w-2/3 ">
      <p className="text-xl font-semibold md:text-2xl">Your Feed</p>
      <div className="flex flex-col gap-1 ">
      {
        loading && "Data is fetching"
      }
      {
        posts.length < 1 && "No POSTS TO DISPLAY"
      }
      {
        posts.map((post) => (
          <SinglePosts key={post.id} post={post}/>
        ))
      }
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