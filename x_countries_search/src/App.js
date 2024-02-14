// import logo from './logo.svg';
import "./App.css";
import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";

function App() {
  const [countries, setCountries] = useState(null);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput((prevInput) => e.target.value);
    // console.log(input);
  };

  const filterCountry = (country, input) => {
    input = input.toLowerCase();
    return country.name.common.toLowerCase().includes(input);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {/* <h1>X Countries Search</h1> */}
      <div className="search">
        <input
        type="text"
          placeholder="Search for countries..."
          value={input}
          onChange={(e) => {
            inputHandler(e);
          }}
        />
      </div>
      <div className="container">
        {!input && (countries ? (
          countries.map((country) => {
            return (
              <CountryCard
                flag={country.flags.png}
                name={country.name.common}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        ))}
        {input && countries
          ? countries
              .filter((country) => filterCountry(country, input))
              .map((country) => {
                return (
                  <CountryCard
                    flag={country.flags.png}
                    name={country.name.common}
                  />
                );
              })
          : ""}
      </div>
    </div>
  );
}

export default App;
