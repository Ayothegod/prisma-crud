import usePost from "@/hooks/usePost"
import { useState } from "react";
import { useSession } from "next-auth/react"


const DesktopCreate = () => {
  const [textArea, setTextArea] = useState("")
  const {loading,postData} = usePost()
  const { data: session, status } = useSession()
  console.log(session)

  const createPost = async() => {
    try {
      if(textArea.length < 1){
        console.log("cant create empty content");
      } else {
        const body = await { textArea, id:session.user.id}
        postData(body)
      setTextArea("")
      // window.location = "/"
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="hidden sm:block sticky top-0 bg-white w-1/3 mt-6">
      <div>
        <textarea placeholder="what is on your mind?" rows="10" className="border border-neutral-400 rounded w-full outline-none focus:border-purple-300 p-2" value={textArea} onChange={e => setTextArea(e.target.value)}></textarea>
        <button className="bg-purple-500 text-white rounded shadow-md py-1 px-4" onClick={createPost}>Post</button>
      </div>
    </div>
  )
}

export default DesktopCreate