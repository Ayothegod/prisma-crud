const { createContext, useContext, useState } = require("react");

const userContext = createContext(null)

export const UserContextProvider = ({children}) => {
    const [name,setName] = useState("Ayomide")
    return (
        <userContext.Provider value={name}>
            {children}
        </userContext.Provider>
    )
}

export const useUserContext = () => useContext(userContext)