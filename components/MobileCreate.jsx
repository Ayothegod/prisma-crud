import { useUserContext } from "@/hooks/hooks"


const MobileCreate = () => {
  const {userData} = useUserContext()
  console.log(userData)
  return (
    <div>
      <input type="text" />
      <input type="text" />
    </div>
  )
}

export default MobileCreate