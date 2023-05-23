import usePost from "@/hooks/usePost"
import { useState } from "react";


const DesktopCreate = () => {
  const [textArea, setTextArea] = useState("")
  const {loading,postData} = usePost()

  // try {
  //   if(textArea.length < 1){
  //     console.log("cant create empty content");
  //   } else {
  //     const body = await { textArea, id:userData[0].id }
  //     postData(body)
  //   // console.log(response);
  //   setTextArea("")
  //   window.location = "/"
  //   }
  // } catch (error) {
  //   console.log(error.message);
  // }

  return (
    <div className="hidden sm:block sticky top-0 bg-white w-1/3 mt-6">
      <div>
        <textarea rows="10" className="border border-neutral-400 rounded w-full outline-none focus:border-purple-300 p-2"></textarea>
        <button className="bg-purple-500 text-white rounded shadow-md py-1 px-4" onClick={createPost}>Post</button>
      </div>
    </div>
  )
}

export default DesktopCreate