import { useRef, useEffect, useCallback } from "react";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import Spinner from "components/Spinner/Spinner";
import useGifs from "hooks/useGifs";
import "./index.css";
import useNearScreen from "hooks/useNearScreen";
import throttle from "just-throttle";

export default function SearchResults({ params }) {
  const { loading, gifs, setPage, loadingNextPage } = useGifs({ keyword : params.keyword });
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({
    distance:"350px",
    externalRef: loading ? null : externalRef,
    once: false
  })
  
  useEffect(()=>{
    window.scrollTo(0, 0)
    return null
  },[])
  
  const throttleHandleNextPage = useCallback(
    throttle(() => setPage((page) => page + 1), 200)
  ,[setPage])

  useEffect(() => {
    if (isNearScreen) throttleHandleNextPage()
  },[isNearScreen, throttleHandleNextPage]);

  return(loading 
        ? <Spinner /> 
        : <>
        <ListOfGifs name={params.keyword} gifs={gifs} />
        {loadingNextPage ? <><br /><br/> <Spinner/></> : null }
        <div id="visor" ref={externalRef}></div> 
        </>
      )
}
