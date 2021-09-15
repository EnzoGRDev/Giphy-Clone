import React, { Suspense, useRef } from "react";
import useNearScreen from "hooks/useNearScreen";
import Categories from "components/Categories/Categories";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrending() {
  const trendingRef = useRef()
  const { isNearScreen } = useNearScreen({ 
    distance: "400px", 
    externalRef:trendingRef 
  })

  return (
    <div ref={trendingRef} className="most-search">
      <Suspense fallback={<Categories loading={true}/>}>
        {isNearScreen 
          ? <TrendingSearches/> 
          : <Categories loading={true}/>
        }
      </Suspense>
    </div>
  );
}
