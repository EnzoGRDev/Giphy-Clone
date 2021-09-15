import { useRef, useEffect, useCallback } from "react";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import Spinner from "components/Spinner/Spinner";
import useGifs from "hooks/useGifs";
import "./index.css";
import useNearScreen from "hooks/useNearScreen";
import throttle from "just-throttle";
import { Helmet } from "react-helmet";
import { Redirect } from "wouter"

export default function SearchResults({ params }) {
  const { loading, gifs, setPage, loadingNextPage, isError } = useGifs({ keyword : params.keyword });
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({
    distance:"350px",
    externalRef: loading ? null : externalRef,
    once: false
  })
  const name = decodeURI(params.keyword)
  
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

  if (loading) (
    <>
      <Helmet title="Loading..."/>
      <Spinner /> 
    </>
  )

  if (isError) return <Redirect to="/404"/>

  return(<>
        <Helmet>
          <title>{`${gifs.length} resultados sobre ${name}`}</title>
          <meta name="description" content={`Gifs sobre ${name}`}/>
        </Helmet>
        {
        !loading && gifs.length === 0 
          ? <h3>No se encontraron resultados</h3>
          : <ListOfGifs name={name} gifs={gifs} />
        }
        {loadingNextPage 
          ? <>
              <br/>
              <br/> 
              <Spinner/>
            </> 
          : null 
        }
        <div id="visor" ref={externalRef}></div> 
        </>
      )
}
