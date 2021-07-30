import React from "react";
import { Link } from "wouter";
import "components/Categories/index.css";

export default function Categories({ trends }) {
  return (
    <div className="most-search">
      <p className="subtitle">Más Buscados</p>
      <ul className="links">
        {trends.map((option) => (
          <li>
            <Link key={option} to={`/search/${option}`}>
              {" "}
              {option}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
