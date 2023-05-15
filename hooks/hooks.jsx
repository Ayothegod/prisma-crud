const { createContext, useContext, useState } = require("react");

const userContext = createContext(null)

export const UserContextProvider = ({children}) => {
    const [userData,setUserData] = useState([])

    const value = {
        userData,setUserData
    }
    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}

export const useUserContext = () => useContext(userContext)