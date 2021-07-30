import React, { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import { GifsContext } from "../context/GifsContext";

const INITIAL_PAGE = 0;

export default function useGifs({ keyword = null } = {}) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse = keyword
    ? keyword
    : localStorage.getItem("lastKeyword")
      ? localStorage.getItem("lastKeyword")
      : "random";

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      console.log(gifs);
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("lastKeyword", keywordToUse);
    });
  }, [keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    getGifs({ page: page, keyword: keywordToUse, limit: 25 }).then(
      (nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      }
    );
  }, [keywordToUse, page, setGifs]);
  return { loading, loadingNextPage, gifs, setPage, keywordToUse };
}
