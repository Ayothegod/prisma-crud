import Image from "next/image"
import { compareAsc, format } from 'date-fns'

const SinglePosts = ({ post }) => {
    // const prismaDate = post.createdAt.slice(0,10)
    // const date = format(new Date(), 'yyyy-MM-dd')
    // console.log(date - prismaDate)
    // console.log(post);
    return (
        <div className="bg-white shadow-lg p-4 flex gap-4 rounded-sm">
            <div className="relative w-8 h-8 md:h-10 md:w-10 overflow-hidden rounded-full">
                <Image src={post.user.image} alt={post.id} fill />
            </div>
            <div>

                <div className="flex items-center w-full gap-2">
                    <p className="font-medium ">{post.user.name}</p>
                    <p className="text-xs opacity-60">{post.createdAt.slice(0, 10)}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-neutral-500">{post.postData}</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default SinglePosts