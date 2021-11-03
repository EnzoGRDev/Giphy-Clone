import { useCallback } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import useGifs from "hooks/useGifs";
import Spinner from "components/Spinner/Spinner";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm/SearchForm";
import { Helmet } from "react-helmet";
import Favorites from "components/Favorites";

export default function Home() {
  const [, pushLocation] = useLocation();
  const { loading, gifs, keywordToUse } = useGifs({});

  const handleSubmit = useCallback((keyword) => {
    pushLocation(`/search/${keyword}`)
  },[pushLocation])

  if (loading || !gifs) return (
    <>
      <Helmet title="Loading..."/>
      <Spinner />
    </>
  )

  return (
    <>
      <Helmet>
        <title>Giffy</title>
        <meta name="description" content="Página de gifs sobre lo que tu quieras. Gifs de deportes, comida, diversión, memes, y más."/>
      </Helmet>
      <SearchForm onSubmit={handleSubmit}/>
      <Favorites />
        <h2 className="subtitle">
          Última Búsqueda : {decodeURI(keywordToUse)}
        </h2>
      <ListOfGifs gifs={gifs} />
      <TrendingSearches />
    </>
  );
}
