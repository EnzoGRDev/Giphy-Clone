import { API_URL, API_KEY } from "./settings"

export default function getGifs ({limit = 10, keyword = "Morty", page= 0 } = {}){
    const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${limit*page}&rating=r&lang=es`


    return(
        fetch(apiUrl)
            .then((res) => res.ok ? res.json() : Promise.reject(res))
            .then((json) => {
                const { data } = json
                const gifs = data.map((el) => {
                    const { id, images, title } = el
                    const image = images.preview_webp.url
                    return{
                        id,
                        image,
                        title,
                    }
                })
                return gifs
            })
            .catch((err) => console.log(err))

    )
}