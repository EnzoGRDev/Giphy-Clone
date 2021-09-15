import React, { useState, useEffect, useCallback } from "react";
import Categories from "components/Categories/Categories";
import getTrendingTerms from "services/getTrending";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true)

  const showLinks = useCallback(() => setTimeout(() => {
    setLoading(false)
  }, 100), [])


  useEffect(() => {
    getTrendingTerms()
      .then((trendsRes) => {
        setTrends(trendsRes)
        showLinks()
      })
  }, [showLinks]);

  return <Categories trends={trends} loading={loading} />;
}
