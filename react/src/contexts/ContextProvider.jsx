import React, { createContext } from 'react'

const StateContext = createContext({
    currentUser: {},
    setCurrentUser: () => {},
    userToken: null,
    setUserToken: () => {}
})

export const ContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({})
    const [userToken, setUserToken] = useState(null)
    return (
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserTokenw
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const userStateContext = () => useContext(StateContext) 