import { useState } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import useGifs from "hooks/useGifs";
import Spinner from "components/Spinner/Spinner";
import TrendingSearches from "components/TrendingSearches";

export default function Home() {
  const [keyword, setKeyword] = useState();
  const [path, pushLocation] = useLocation();
  const { loading, gifs, keywordToUse } = useGifs({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  if (loading) return <Spinner />;
  if (!gifs) return <Spinner />;
  return (
    <>
      <div className="content-form">
        <form onSubmit={handleSubmit} className="content-search">
          <input
            className="input-search"
            type="text"
            onChange={handleChange}
            value={keyword}
            placeholder="Buscar Gif..."
          />
          <button className="search-icon">&#128269;</button>
        </form>
        <i>{keyword}</i>
      </div>
      <p className="subtitle">Ultima Búsqueda : {decodeURI( keywordToUse)}</p>
      <ListOfGifs gifs={gifs} />
      <TrendingSearches />
    </>
  );
}
