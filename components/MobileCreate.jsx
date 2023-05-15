import { useUserContext } from "@/hooks/hooks"
import Image from "next/image"


const MobileCreate = ({mobileCreate,setMobileCreate}) => {
  const {userData} = useUserContext()
  console.log(userData)
  return (
    <div className="text-white">
      <div className="flex items-center justify-center h-screen">
      <div>
        <div className="w-10 h-10 relative">

        {/* <Image src={userData?.Image} alt="hello" fill className="absolute"/> */}
        </div>
      </div>
      {userData && 
      <p className="p-4">{userData[0].name} bruh</p>
      }
      <input type="text" className="border" />
      <input type="text" className="border"/>
      <button onClick={() => setMobileCreate(!mobileCreate)}>Close modal</button>
      </div>
    </div>
  )
}

export default MobileCreate