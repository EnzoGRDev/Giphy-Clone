import { useCallback } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import useGifs from "hooks/useGifs";
import Spinner from "components/Spinner/Spinner";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm/SearchForm";

export default function Home() {
  const [path, pushLocation] = useLocation();
  const { loading, gifs, keywordToUse } = useGifs({});

  const handleSubmit = useCallback((keyword) => {
    pushLocation(`/search/${keyword}`);
  },[pushLocation]);

  if (loading || !gifs) return <Spinner />;
  return (
    <>
      <SearchForm onSubmit={handleSubmit}/>
      <p className="subtitle">Última Búsqueda : {decodeURI(keywordToUse)}</p>
      <ListOfGifs gifs={gifs} />
      <TrendingSearches />
    </>
  );
}
