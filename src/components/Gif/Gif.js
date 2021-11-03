import Fav from 'components/Fav';
import React, {  useRef } from 'react'
import getSingleGif from 'services/getSingleGif';
import { Link } from "wouter";
import "./Gif.css";


function Gif({id, title, image, imageHigh, idFav }) {
  const imgRef = useRef()

  const handleOnError = () => getSingleGif(id)
    .then(({image}) => imgRef.current.src = image)

  return (
        <figure className="Gif">
          <figcaption className="Gif__header">
            <h3>
              { title }
            </h3>
          </figcaption>
          <Link to={`/gif/${id}`} className="Gif-link" >
              <img 
                src={imageHigh || image} 
                alt={title} 
                ref={imgRef} 
                loading="lazy" 
                onError={handleOnError}
              />
          </Link>
          <figcaption className="Gif__footer">
            <Fav 
              id= {idFav}
              gifId= {id} 
              image_mid= {image} 
              image_high= {imageHigh} 
              title= {title} 
            />
          </figcaption>
        </figure>
  )
}

export default React.memo(Gif)