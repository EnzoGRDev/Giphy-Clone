import { useContext, useCallback } from "react"
import { UserContext } from "context/UserContext"
import loginService from "services/loginService"

export default function useUser(){
  const {user, setUser, favorites, setFavorites} = useContext(UserContext)

  const login = useCallback((username, password) => {
    loginService(username, password)      
      .then(resUser => resUser.json())
      .then(user => {
        const {username, favorites} = user
        setUser(username)
        setFavorites(favorites)
        localStorage.setItem("username", username)
        localStorage.setItem("favorites", JSON.stringify(favorites))
      })
      .catch(err => console.error(err))

  }, [setFavorites, setUser])

  const logout = useCallback(()=>{
    setUser("")
    setFavorites("")
    localStorage.setItem("username", "")
    localStorage.setItem("favorites", JSON.stringify([]))
},[setFavorites, setUser])


  return {user, login, logout, isLogged: user ? true : false, favorites }
}