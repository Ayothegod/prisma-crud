import { useUserContext } from "@/hooks/hooks"
import Image from "next/image"


const MobileCreate = ({mobileCreate,setMobileCreate}) => {
  const {userData} = useUserContext()
  console.log(userData)
  return (
    <div className="text-white h-screen">
      <div className="flex items-center flex-col justify-center h-full bg-white">

      <div className="flex items-center gap-4">

        <div className="w-8 h-8 relative rounded-full overflow-hidden">
        <Image src={userData[0].image} alt={userData[0].name} fill className="absolute"/>
        </div>
        <p className="font-semibold">@{userData[0].name}</p>

      </div>

      <input type="text" className="border" />
      <input type="text" className="border"/>
      <button onClick={() => setMobileCreate(!mobileCreate)}>Close modal</button>
      </div>
    </div>
  )
}

export default MobileCreate