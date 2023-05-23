import Image from "next/image"
import { compareAsc, format } from 'date-fns'
import { BsThreeDotsVertical } from "react-icons/bs"
import { useState } from "react"

const SinglePosts = ({ post }) => {
    const [popup,setPopup] = useState(false)
    // const prismaDate = post.createdAt.slice(0,10)
    // const date = format(new Date(), 'yyyy-MM-dd')
    // console.log(date - prismaDate)
    // console.log(post);
    const deletePost = () => {
        try {
            
        } catch (error) {
         console.log(error.message);   
        }
    }
    return (
        <div className="bg-white shadow-lg p-4 flex gap-4 rounded-sm relative">
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
            <div className="absolute right-2 cursor-pointer" onClick={() => setPopup(!popup)}>
                <BsThreeDotsVertical/>
            </div>
            {
                popup && 
                <div className="absolute rounded px-4 py-2 right-6 bg-red-600 text-white cursor-pointer" onClick={deletePost}>
                    <p>delete post</p>
                </div>
            }

        </div>
    )
}

export default SinglePosts