import { useRef, useEffect, useCallback } from "react";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import Spinner from "components/Spinner/Spinner";
import useGifs from "hooks/useGifs";
import "./index.css";
import useNearScreen from "hooks/useNearScreen";
import throttle from "just-throttle";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({
    distance:"100px",
    externalRef: loading ? null : externalRef,
    once: false
  })
  
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleHandleNextPage = useCallback(throttle(() => setPage((page) => page + 1), 1000),[])
  
  console.log(isNearScreen)
  useEffect(() => {
    if (isNearScreen) throttleHandleNextPage()
  },[isNearScreen, throttleHandleNextPage]);

  return<section className="search-results">
      {loading 
      ? <Spinner /> 
      : <>
        <ListOfGifs name={keyword} gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
        </>
      }
    </section>;
}
