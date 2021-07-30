import React from 'react'
import { Link } from "wouter";
import "./Gif.css";

export default function Gif({id, title, image }) {
    // console.log(id,title,image) 
  return (
      <Link to={`/gif/${id}`} className="Gif-link">
        <div className="Gif">
          <h3>{ title }</h3>
          <img src={`${image}`} alt={ title } />
        </div>
      </Link>
  );
}