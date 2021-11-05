import ListOfGifs from "components/ListOfGifs/ListOfGifs"
import useUser from "hooks/useUser"
import { useEffect, useState } from "react"
import { FAVORITES_URL } from "services/settings"
import {useLocation} from 'wouter'

export default function Favorites(){
  const [gifs, setGifs] = useState([])
  const {user, favorites} = useUser()
  const [, changeLocation] = useLocation()

  useEffect(()=>{
    if (!user) return setGifs([])
    fetch(`${FAVORITES_URL}/${user}`)
      .then(res => {
        if(res.status === 200) return res.json()
        if (res.status === 304) changeLocation('/login')
        else Promise.reject(res)
      })
      .then(json => {
        const favorites = json[0].favorites
        const newGifs = favorites
          .map((gif)=> {
            return {
           idFav: gif.id,
            id: gif.gif_id,
            title: gif.title, 
            image: gif.image_mid, 
            imageHigh: gif.image_high
            }
          })

        setGifs(newGifs)
      })
      .catch(error=>{
        changeLocation('/login')
        console.error(error)
      })

  },[user, favorites])

  if (!user) return null

  return (
    <>
      <h2 className="subtitle">Favoritos</h2>
      <ListOfGifs gifs={gifs}/>
    </>
  )
}