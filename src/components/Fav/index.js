import { ADD_FAVORITE, DELETE_FAVORITE, FAVORITES_URL } from "services/settings"
import useUser from 'hooks/useUser';
import "./index.css"
import React,  { useState, useEffect} from 'react'

//  const findIsFaved = (favorite) => favorite.gif_id === gif

function Fav({id, gifId, image_mid, image_high, title}){
  const { favorites, setFavorites} = useUser()
  const [isFaved, setIsFaved] = useState(()=>favorites.find(favorite => favorite.gif_id === gifId)) 


  useEffect(()=>{
    favorites.find(favorite => favorite.gif_id === gifId) ? setIsFaved(true) : setIsFaved(false)
  }, [favorites])

  function handleClick() {
    if (!isFaved) {
      fetch(ADD_FAVORITE, {
        method: "POST",
        headers: {
          "authorization": `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          gif_id: gifId,
          title,
          image_mid,
          image_high
        }
        )
      })
        .then(res => res.json())
        .then(json => {
          console.log(json)
          setFavorites(json)
          setIsFaved(true)
        })
        .catch(err => console.log(err));
    } else {
      fetch(`${DELETE_FAVORITE}${gifId}`, {
        method: "DELETE",
        headers: {
          "authorization": `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(json => {
          console.log(json)
          setFavorites(json)
          setIsFaved(false)
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <>
      <button onClick={handleClick} className="fav">
        <i
          className={`
          fas 
          fa-heart 
          fav__icon 
          ${
            isFaved
              ? "fav_red"
              : ""
          }`}
        ></i>
      </button>
    </>
  );
}

export default React.memo(Fav)