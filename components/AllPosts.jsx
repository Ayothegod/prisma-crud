import SinglePosts from "./SinglePosts";


const AllPosts = ({allPosts}) => {
  console.log(allPosts);
  return (
    <div className="w-full sm:w-2/3">
      Posts
      {
        allPosts.map((post) => (
          <SinglePosts key={post.id}/>
        ))
      }
    </div>
  )
}

export default AllPosts