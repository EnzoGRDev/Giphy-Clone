import {createContext, useState, useRef} from 'react'

export const UserContext = createContext()

export default function UserContextProvider ({children}){
  const [user, setUser] = useState(()=> localStorage.getItem("username"))
  const [favorites, setFavorites] = useState(()=> JSON.parse(localStorage.getItem("favorites")))
  const [isLogged, setIsLogged] = useState(()=> {
    if (localStorage.getItem("isLogged") === "true") return true
    else return false
  })
  return (
    <UserContext.Provider 
      value={{
        user, 
        setUser,
        favorites, 
        setFavorites, 
        isLogged, 
        setIsLogged
      }}>
      {children}
    </UserContext.Provider>
  )
}