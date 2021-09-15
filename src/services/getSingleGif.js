import { API_URL_SINGLE_GIF } from "./settings"

export default function getSingleGif(id){
  return fetch(API_URL_SINGLE_GIF(id))
    .then(gifRes => gifRes.json())
    .then(gifResJSON => {
      const {title, images} = gifResJSON.data
      return {
        title,
        image: images.preview_webp.url ? images.preview_webp.url : "",
        imageHigh: images.downsized_medium.url
      }
    })
}