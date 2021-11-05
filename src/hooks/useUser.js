import { useContext, useCallback, useState } from "react"
import { UserContext } from "context/UserContext"
import loginService from "services/loginService"

export default function useUser(){
  const {user, setUser, favorites, setFavorites, isLogged, setIsLogged} = useContext(UserContext)
  const [isError, setIsError] = useState(false)

  const login = useCallback((username, password)=> {
    loginService(username, password)      
      .then(resUser=> resUser.json())
      .then(user=> {
        if (user.statusMessage) return setIsError(true)
        console.log("user logged is",user)
        const {username, favorites, token} = user
        setUser(username)
        setFavorites(favorites)
        setIsLogged(true)
        localStorage.setItem("isLogged", true)
        localStorage.setItem("token", token)
        localStorage.setItem("username", username)
        localStorage.setItem("favorites", JSON.stringify(favorites))
      })
      .catch(err=> console.error(err))

  }, [setFavorites, setIsLogged, setUser])

  const logout = useCallback(()=> {
    setUser("")
    setFavorites("")
    setIsLogged(false)
    localStorage.setItem("isLogged", false)
    localStorage.setItem("token", "")
    localStorage.setItem("username", "")
    localStorage.setItem("favorites", JSON.stringify([]))
},[setFavorites, setIsLogged, setUser])

  const addFavorite = ()=>{
    console.log("hola")
  }

  return {
    user, 
    login, 
    logout, 
    isLogged,
    favorites,
    setFavorites,
    isError
  }
}