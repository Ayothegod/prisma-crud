import Image from "next/image"


const SinglePosts = ({post}) => {
    console.log("ommor, im tired");
  return (
    <div>
        <p>{post.postData}</p>
        <Image src={post.user.image} alt={post.id} width={20} height={20}/>
    </div>
  )
}

export default SinglePosts