import { useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { AiOutlineLoading3Quarters, AiOutlineMail } from "react-icons/ai"
import { BsPerson } from "react-icons/bs"
import { MdPassword } from "react-icons/md"
import {  signIn ,useSession, signOut} from "next-auth/react"
import { useRouter } from "next/router"

const Auth = () => {
    const [variant, setVariant] = useState("signin")
    const [loadSpinner, setLoadSpinner] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const { data: session } = useSession()
    console.log(session);
    const changePage = () => {
        if (variant == "signin") {
            setVariant("signup")
        } else {
            setVariant("signin")
        }
    }
    const setAuth = () => {
        signIn("google",{ callbackUrl: 'http://localhost:3000/' })
    }

    return (
        <div className="h-screen flex items-center px-8 justify-center bg-gradient-to-tr from-purple-600 to-purple-400">
            <div className="bg-white p-4 w-full sm:w-1/2 md:w-[25rem] rounded shadow-md ">
                {variant == "signin" ? <h1 className="text-2xl mb-4 font-medium ">Sign in</h1> : <h1 className="text-2xl mb-4 font-medium ">Sign up</h1>}
                <div>
                    {variant == "signup" &&
                        <div className="flex relative">

                            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="input name" className="border border-neutral-400 rounded px-2 w-full my-1 placeholder:text-sm outline-none focus:border-purple-600 py-2 text-sm" />
                            <span className="absolute right-2 top-3 text-gray hover:text-black">
                                <BsPerson />
                            </span>
                        </div>
                    }

                    <div className="flex relative">

                        <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="input email" className="border border-neutral-400 rounded px-2  w-full my-1 placeholder:text-sm outline-none focus:border-purple-600 py-2 text-sm" />
                        <span className="absolute right-2 top-3 text-gray hover:text-black">
                            <AiOutlineMail />
                        </span>
                    </div>

                    <div className="flex relative">

                        <input type={showPassword ? "text" : "password"} name="password" value={Password} onChange={e => setPassword(e.target.value)} placeholder="input password" className="border border-neutral-400 rounded px-2  w-full my-1 placeholder:text-sm py-2 text-sm outline-none focus:border-purple-600" />
                        <span className="absolute right-2 top-3 text-gray hover:text-black" onClick={() => setShowPassword(!showPassword)}>
                            <MdPassword />
                        </span>
                    </div>

                    {variant == "signin" ?
                        <button className="cursor-pointer rounded w-full bg-purple-600 text-white px-4 py-1 font-semibold my-4 hover:bg-purple-400 grid place-items-center">
                            {loadSpinner ? <AiOutlineLoading3Quarters className="text-xl fnt-bold animate-spin" /> : "sign in"}
                        </button> :
                        <button className="cursor-pointer rounded w-full bg-purple-600 text-white px-4 py-1 font-semibold my-4 hover:bg-purple-400 grid place-items-center">
                            {loadSpinner ? <AiOutlineLoading3Quarters className="text-xl fnt-bold animate-spin" /> : "sign up"}
                        </button>
                    }

                    <div>
                        <button className="cursor-pointer rounded w-full text-black border border-neutral-500 font-medium px-4 py-1 hover:text-white hover:bg-black flex items-center gap-2 justify-center" onClick={setAuth}>sign in with google <FcGoogle /></button>
                    </div>
                </div>
                {
                    variant == "signin"
                     ? 
                    <p className="text-xs mt-4 text-center">do not have an account? <span className="font-bold underline cursor-pointer" onClick={changePage}>sign up</span></p> 
                    : 
                    <p className="text-xs mt-4 text-center">already a user? <span className="font-bold underline cursor-pointer" onClick={changePage}>sign in</span></p>
                }
            </div>
        </div>
    )
}
export default Auth
