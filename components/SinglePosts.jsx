import Image from "next/image"
import { compareAsc, format } from 'date-fns'

const SinglePosts = ({ post }) => {
    // console.log(post);
    return (
        <div className="bg-white shadow-lg p-4 flex gap-4">
            <div className="relative w-8 h-8 md:h-10 md:w-10 overflow-hidden rounded-full">

                <Image src={post.user.image} alt={post.id} fill />
            </div>
            <div>

                <div className="flex items-center w-full gap-2">
                    <p className="font-medium ">{post.user.name}</p>
                    <p className="">{ format(new Date(), 'yyyy-MM-dd')}</p>
                </div>
                <div>
                    <p>{post.postData}</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default SinglePosts