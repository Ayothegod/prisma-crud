import { useUserContext } from "@/hooks/hooks"
import Image from "next/image"
import { useState } from "react"
import { MdArrowBackIos } from "react-icons/md"
import {  useSession, getSession } from "next-auth/react"


const MobileCreate = ({ mobileCreate, setMobileCreate }) => {
  const { userData } = useUserContext()
  const { data: session, status } = useSession()
  const [textArea, setTextArea] = useState("")
  // const [id,setId] = useState(userData[0].id)
  // console.log(userData);
  // console.log(id);

  // console.log(userData)

  const createPost = async () => {
    try {
      if(textArea.length < 1){
        console.log("cant create empty content");
      } else {
        const body = await { textArea, id:userData[0].id }
      const response = await fetch("/api/routes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      console.log(response)
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="text-black h-screen  ">
      <div className="flex items-center justify-center h-full px-4 py-8">
        <div className="bg-white w-full h-full flex items-center flex-col justify-center p-4 rounded shadow-md ">

          <button onClick={() => setMobileCreate(!mobileCreate)} className="self-start bg-purple-500 text-white text-xl py-2 px-2 rounded shadow hover:bg-purple-600 mb-2"><MdArrowBackIos /></button>

          <div className="flex items-center w-full gap-2 mb-4">
            <div className="w-8 h-8 relative rounded-full overflow-hidden">
              <Image src={userData[0].image} alt={session?.image} fill className="absolute" />
            </div>
            <p className="font-semibold">@{session?.email}</p>
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
