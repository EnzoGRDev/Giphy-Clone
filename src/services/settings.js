export const API_KEY = process.env.REACT_APP_API_KEY
export const API_TRENDING = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`

export const API_URL_GIFS = keyword => `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=es`

export const API_URL = 'https://api.giphy.com/v1'