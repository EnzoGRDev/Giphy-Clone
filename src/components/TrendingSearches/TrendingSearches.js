import React, { useState, useEffect } from "react";
import Categories from "components/Categories/Categories";
import getTrendingTerms from "services/getTrending";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then((trendsRes) => setTrends(trendsRes));
  }, []);

  return <Categories trends={trends} />;
}
