import React, { useEffect, useState } from "react";
import "./Countries.css";
import Country from './../Country/Country';

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, [countries]);

  return (
    <>
      <div className="countries">
        {countries.map((country) => (
          <Country country={country} />
        ))}
      </div>
    </>
  );
}
