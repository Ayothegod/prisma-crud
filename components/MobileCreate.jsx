import { useUserContext } from "@/hooks/hooks"
import Image from "next/image"


const MobileCreate = ({ mobileCreate, setMobileCreate }) => {
  const { userData } = useUserContext()
  console.log(userData)
  return (
    <div className="text-black h-screen  ">
      <div className="flex items-center justify-center h-full px-4 py-8">
        <div className="bg-white w-full h-full flex items-center flex-col justify-center p-4 rounded shadow-md ">

          <div className="flex items-center justify-between w-full gap-4 mb-4">
            <div className="w-8 h-8 relative rounded-full overflow-hidden">
              <Image src={userData[0].image} alt={userData[0].name} fill className="absolute" />
            </div>
            <p className="font-semibold">@{userData[0].name}</p>
          </div>

          <button onClick={() => setMobileCreate(!mobileCreate)} className="self-end">Close modal</button>

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
