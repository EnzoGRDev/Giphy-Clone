import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import { GifsContext } from "../context/GifsContext";

const INITIAL_PAGE = 0;

export default function useGifs({ keyword = null } = {}) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [isError, setIsError] = useState(false)
  const { gifs, setGifs } = useContext(GifsContext);
  let keywordToUse = keyword
    ? keyword
    : localStorage.getItem("lastKeyword")
      ? localStorage.getItem("lastKeyword")
      : "random";

  if (keywordToUse === "null") keywordToUse = "random"



  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse })
      .then((gifs) => {
        console.log(gifs)
          if (gifs === undefined ) {
            setLoading(true)
          }
          setGifs(gifs);
          setLoading(false);
          localStorage.setItem("lastKeyword", keywordToUse);
        }
      )
      .catch(err => setIsError(true));
  }, [ keywordToUse, setGifs, setIsError]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    console.log(page)
    setLoadingNextPage(true);

    getGifs({ page: page, keyword: keywordToUse, limit: 10 })
      .then( nextGifs => {
          console.log(nextGifs)
          if (nextGifs === undefined) return setLoadingNextPage(false)
          if (!nextGifs) return setIsError(true)
          
          setGifs((prevGifs) => prevGifs.concat(nextGifs));
          setLoadingNextPage(false);
        }
      )
      .catch((err) => setIsError(true));
  }, [keywordToUse, page, setGifs]);

  return { 
    loading, 
    loadingNextPage, 
    gifs, 
    setPage, 
    keywordToUse,
    isError
  };
}
