import {createContext, useState} from 'react'

export const UserContext = createContext()

export default function UserContextProvider ({children}){
  const [user, setUser] = useState(()=>localStorage.getItem("username"))
  const [favorites, setFavorites] = useState(()=>localStorage.getItem("favorites"))

  return <UserContext.Provider value={{user, setUser, favorites, setFavorites}}>
    {children}
  </UserContext.Provider>
}