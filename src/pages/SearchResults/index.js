import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import Spinner from "components/Spinner/Spinner";
import useGifs from "hooks/useGifs";
import "./index.css";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading,loadingNextPage, gifs, setPage } = useGifs({ keyword });

  const HandlerNextPage = () => {
    setPage((page) => page + 1);
  };

  return (
    <section className="search-results">
      {loading ? <Spinner /> : <ListOfGifs name={keyword} gifs={gifs} />}
      <br/>
      <br/>
      {loadingNextPage ? <Spinner/> : null}
      {loading ? null : <button className="btn-next-page" onClick={HandlerNextPage}>
        VER MAS
      </button>
      }
    </section>
  );
}
