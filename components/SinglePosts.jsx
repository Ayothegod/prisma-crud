import Image from "next/image"


const SinglePosts = ({post}) => {
  return (
    <div>
        <p>{post.postData}</p>
        <Image src={post.user.image} alt={post.id} width={20} height={20}/>
    </div>
  )
}

export default SinglePosts