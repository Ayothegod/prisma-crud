import { useUserContext } from "@/hooks/hooks"


const MobileCreate = ({mobileCreate,setMobileCreate}) => {
  const {userData} = useUserContext()
  console.log(userData)
  return (
    <div>
      Hello
      <input type="text" className="border" />
      <input type="text" className="border"/>
      <button onClick={() => setMobileCreate(!mobileCreate)}>Close modal</button>
    </div>
  )
}

export default MobileCreate