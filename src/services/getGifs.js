import { API_URL, API_KEY } from "./settings"

const fromApiResponse = (json) =>{
  const { data } = json
  console.log(data)
  const gifs = data
    .map((gif) => {
      const { id, images, title } = gif
      const image = images.preview_webp.url ? images.preview_webp.url : ""
      const imageHigh = images.fixed_height_downsampled.url || ""
      return {id, image, imageHigh, title}
    })
  return gifs
}

export default function getGifs({ limit = 10, keyword = "Morty", page = 0}= {}) {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${limit * page}&rating=r&lang=es`

  return fetch(apiUrl)
    .then((res) => res.ok 
        ? res.json() 
        : Promise.reject(res))
    .then(json => fromApiResponse(json))
    .catch((err) => err)
}