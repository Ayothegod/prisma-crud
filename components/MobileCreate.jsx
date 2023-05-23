import { useUserContext } from "@/hooks/hooks"
import Image from "next/image"
import { useState } from "react"
import { MdArrowBackIos } from "react-icons/md"
import {  useSession } from "next-auth/react"
import { useRouter } from "next/router"
import usePost from "@/hooks/usePost"

const MobileCreate = ({ mobileCreate, setMobileCreate }) => {
  const { userData } = useUserContext()
  const router = useRouter()
  const { data: session, status } = useSession()
  const [textArea, setTextArea] = useState("")
  const {loading,error,postData} = usePost()
  
  const createPost = async () => {
    try {
      if(textArea.length < 1){
        console.log("cant create empty content");
      } else {
        const body = await { textArea, id:session.user.id }
        postData(body)
      setTextArea("")
      window.location = "/"
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  if(status === "unauthenticated"){
    return (
      <div className="text-white flex items-center p-4 justify-center h-screen">
        <div>

        <button onClick={() => setMobileCreate(!mobileCreate)} className="self-start bg-purple-500 text-white text-xl py-2 px-2 rounded shadow hover:bg-purple-600 mb-2"><MdArrowBackIos /></button>
        <p>cant post, you are not logged in</p>
        <button>sign in</button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center h-screen bg-[rgba(0,0,0,0.9)] w-screen ">

      <div className="">
        <div className="bg-white w-full h-full flex items-center flex-col justify-center p-4 rounded shadow-md ">

          <button onClick={() => setMobileCreate(!mobileCreate)} className="self-start bg-purple-500 text-white text-xl py-2 px-2 rounded shadow hover:bg-purple-600 mb-2"><MdArrowBackIos /></button>

          <div className="flex items-center w-full gap-2 mb-4">
            <div className="w-8 h-8 relative rounded-full overflow-hidden">
              <Image src={session.user.image} alt={session?.user.image} fill className="absolute" />
            </div>
            <p className="font-semibold">@{session?.user.name}</p>
          </div>

          <div className="w-full">
            <textarea name="textarea" id="" cols="30" rows="8" className="border border-neutral-500 w-full rounded outline-purple-600 my-4 p-2" placeholder="postr away!!!" value={textArea} onChange={(e) => setTextArea(e.target.value)}></textarea>
          </div>

          <button onClick={createPost} className="self-end bg-purple-500 text-white py-1 px-2 rounded shadow hover:bg-purple-600">Post</button>

        </div>
      </div>

    </div>
  )
}

export default MobileCreate


{/* <div className="flex items-center justify-between w-full gap-4 mb-4">

</div> */}
{/* 
  <div className="w-8 h-8 relative rounded-full overflow-hidden">
  <Image src={userData[0].image} alt={userData[0].name} fill className="absolute" />
  </div>
  <p className="font-semibold">@{userData[0].name}</p> */}



  {/* <button onClick={() => setMobileCreate(!mobileCreate)}>Close modal</button> */ }