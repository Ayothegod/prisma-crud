import Image from "next/image"


const SinglePosts = ({post}) => {
    console.log("Lets build this stuff");
  return (
    <div className="bg-white my-4">
        <p>{post.postData}</p>
        <Image src={post.user.image} alt={post.id} width={20} height={20}/>
    </div>
  )
}

export default SinglePosts