export const API_KEY = process.env.REACT_APP_API_KEY
export const API_TRENDING = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`

export const API_URL_GIFS = keyword => `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=es`

export const API_URL = 'https://api.giphy.com/v1'

export const API_URL_SINGLE_GIF = id => `${API_URL}/gifs/${id}?api_key=${API_KEY}`

export const API_GIFFY = `https://agile-refuge-29386.herokuapp.com`

export const USERS_URL = `${API_GIFFY}/users`

export const LOGIN_URL = `${USERS_URL}/login`

export const REGISTER_URL = `${USERS_URL}/register`

export const FAVORITES_URL = `${API_GIFFY}/favorites`

export const ADD_FAVORITE = `${FAVORITES_URL}/`

export const DELETE_FAVORITE = `${FAVORITES_URL}/`