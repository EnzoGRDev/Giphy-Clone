import ListOfGifs from "components/ListOfGifs/ListOfGifs"
import useUser from "hooks/useUser"
import { useEffect, useState } from "react"
import { FAVORITES_URL } from "services/settings"

export default function Favorites(){
  const [gifs, setGifs] = useState([])
  const {user, favorites} = useUser()

  useEffect(()=>{
    if (!user) setGifs([])
    fetch(`${FAVORITES_URL}/${user}`)
      .then(res => {
        console.log(res)
        return res.json()
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
      .catch(error=>console.error(error))

  },[user, favorites])

  if (!user) return null

  return (
    <>
      <h2 className="subtitle">Favoritos</h2>
      <ListOfGifs gifs={gifs}/>
    </>
  )
}