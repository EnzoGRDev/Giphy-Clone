import { API_URL_SINGLE_GIF } from "./settings"

export default function getSingleGif(id){
  return fetch(API_URL_SINGLE_GIF(id))
    .then(gifRes => gifRes.json())
      .then(gifResJSON => {
        console.log(gifResJSON)
        return {
          title: gifResJSON.data.title,
          image: gifResJSON.data.images.preview_webp.url
        }
      } )
}