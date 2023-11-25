import React from "react";
import "./Country.css";

export default function Country({ country }) {
  const arr = [];
  const language = country.languages;
  for (const key in language) {
    arr.push(language[key]);
  }
  return (
    <>
      <div className="single-country">
        <h2>{country.name.common}</h2>
        <img src={country?.flags?.png} alt="" />
        <p>
          Population: <b> {country.population}</b>
        </p>
        <hr />
        <p>
          Capital: <b>{country.capital}</b> | Continent:{" "}
          <b>{country.continents}</b>
        </p>
        <hr />
        <p className="language">
          <b>Language:</b> {arr.join(", ")}
        </p>
      </div>
    </>
  );
}
