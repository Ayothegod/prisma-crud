import { useState, useEffect } from "react"

const usePost = (body) => {
    const [data,setData] = useState("")
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")

    const postData = async(body) => {
        try {
            const response = await fetch("/api/routes", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
            console.log(response);
            console.log({response});
            setLoading(false)
        } catch (error) {
            setError(error.message)
        }
    }

    return {loading,error};
}

export default usePost
