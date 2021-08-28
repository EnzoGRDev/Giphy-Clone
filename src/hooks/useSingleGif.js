import { useEffect, useState } from "react";
import useGlobalgifs from "hooks/useGlobalgifs";
import getSingleGif from "services/getSingleGif";

export default function useSingleGif(id){
  const gifs = useGlobalgifs();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const gifCache = gifs ? gifs.find((Singlegif) => Singlegif.id === id) : JSON.parse(localStorage.getItem("GifInfo"));
  const [gif, setGif] = useState(gifCache);

  useEffect(()=>{
    if (!gif) {
      setIsLoading(true)
      getSingleGif(id)
        .then(gifRes => {
          setGif(gifRes)
          setIsLoading(false)  
          localStorage.setItem("GifInfo", JSON.stringify(gifRes))
        })
          .catch(() => {
            setIsError(true)
            setIsLoading(false)
          })
    }  
      
  },[id, gif])
  
  return {gif, isError, isLoading}
}