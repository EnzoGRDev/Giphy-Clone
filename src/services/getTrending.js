import { API_TRENDING } from './settings.js'

const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse;
    return data
}

export default function getTrendingTerms (){
return(
  fetch(API_TRENDING)
    .then((res) => res.ok ? res.json() : Promise.reject(res))
      .then(fromApiResponseToGifs)
        .catch((err) => console.log(err))
)
}