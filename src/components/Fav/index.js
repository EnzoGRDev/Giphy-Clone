import {useState} from "react"
import { FAVORITES_URL } from "services/settings"
import "./index.css"

export default function Fav({favId}){
  const [isLiked, setIsLiked] = useState(false)
  const urlUse = isLiked ? FAVORITES_URL : `${FAVORITES_URL}/${favId}`
  const handleClick = e =>{
      return alert("hola")
  }

  return(
    <>
    <button onClick={handleClick} className="fav"><i className="fas fa-heart fav__icon"></i></button>
    </>
  )
}