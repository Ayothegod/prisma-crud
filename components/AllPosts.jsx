import SinglePosts from "./SinglePosts";


const AllPosts = ({allPosts}) => {
  console.log(allPosts);
  return (
    <div className="w-full sm:w-2/3 ">
      <p className="text-xl font-semibold md:text-2xl">Your Feed</p>
      <div className="flex flex-col gap-1 ">

      {
        allPosts.map((post) => (
          <SinglePosts key={post.id} post={post}/>
        ))
      }
      {
        allPosts.map((post) => (
          <SinglePosts key={post.id} post={post}/>
        ))
      }
      {
        allPosts.map((post) => (
          <SinglePosts key={post.id} post={post}/>
          ))
        }
        </div>
    </div>
  )
}

export default AllPosts