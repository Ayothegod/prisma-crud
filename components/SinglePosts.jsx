import Image from "next/image"


const SinglePosts = ({ post }) => {
    console.log(post);
    return (
        <div className="bg-white shadow-lg p-4">
            <div className="">
                <div className="relative w-8 h-8 md:h-10 md:w-10 overflow-hidden rounded-full">

                <Image src={post.user.image} alt={post.id} fill/>
                </div>
                <p>{post.user.name}</p>
                <p>{post.createdAt}</p>
            </div>
            <div>
                <p>{post.postData}</p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default SinglePosts