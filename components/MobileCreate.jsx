import { useUserContext } from "@/hooks/hooks"
import Image from "next/image"


const MobileCreate = ({mobileCreate,setMobileCreate}) => {
  const {userData} = useUserContext()
  console.log(userData)
  return (
    <div className="text-white">
      <div className="flex items-center flex-col justify-center h-screen">
      <div>
        <div className="w-10 h-10 relative">

        <Image src={userData[0].image} alt={userData[0].name} fill className="absolute"/>
        </div>
      </div>
      {userData && 
      <div className="flex flex-col">
      <p className="p-4">{userData[0].name} bruh</p>
      <p className="p-4">{userData[0].email} bruh</p>
      </div>
      }
      <input type="text" className="border" />
      <input type="text" className="border"/>
      <button onClick={() => setMobileCreate(!mobileCreate)}>Close modal</button>
      </div>
    </div>
  )
}

export default MobileCreate