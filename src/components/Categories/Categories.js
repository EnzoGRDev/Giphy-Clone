import React from "react";
import { Link } from "wouter";
import "components/Categories/index.css";
import CategoriesLoader from "components/CategoriesLoader"

export default function Categories({ trends, loading }) {
  const newArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  const trendsUse = !trends 
    ?  
    newArray 
    :
    trends
  return (
    <>
      <h3 className="subtitle">Más Buscados</h3>
      <ul className="links">
        {
          loading 
          ?
          trendsUse.map((trend) => (
          <li key={`ellink${trend}`} >
            <span className="link">
              <CategoriesLoader/>
            </span>
          </li>
          ))
          :
          trendsUse.map((trend) => (
          <li key={trend} >
            <Link to={`/search/${trend}`} className="link">
              {trend}
            </Link>
          </li>
        ))
        }
      </ul>
    </>
  );
}
