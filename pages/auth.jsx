import { useState } from "react"
// import {FcGoogle} 

const Auth = () => {
    const [variant, setVariant] = useState("signin")

    return (
        <div className="h-screen flex items-center px-8 justify-center bg-gradient-to-tr from-purple-600 to-purple-400">
            <div className="bg-white p-4 w-full sm:w-1/2 rounded shadow-md ">
                {variant == "signin" ? <h className="text-2xl font-medium ">Sign in</h> : <h>Sign up</h>}
                <div>
                    {variant == "signin" && <input type="text" placeholder="input name" className="border border-neutral-400 rounded px-2 py-1 w-full my-1" />}

                    <input type="text" placeholder="input email" className="border border-neutral-400 rounded px-2 py-1 w-full my-1" />
                    <input type="password" placeholder="input password" className="border border-neutral-400 rounded px-2 py-1 w-full my-1"/>


                    <input type="submit" value="sign in" className="cursor-pointer rounded w-full bg-purple-600 text-white px-4 py-1 font-semibold my-4 hover:bg-purple-400"/>

                    <div>
                        <button className="cursor-pointer rounded w-full text-black border border-neutral-500 font-medium px-4 py-1 hover:text-white hover:bg-black">sign in with google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth