import React, { useEffect, useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [backupData, setbackupData] = useState([]);
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [input, setInput] = useState("");
  const [lightMode, setLightMode] = useState(false);

  function handleOnClick() {
    setLightMode((prevState) => !prevState);
  }

  function handleOnInput(e) {
    setInput(e.target.value);
    setData(
      backupData.filter((item) =>
        item.name.toLowerCase().includes(e.target.value)
      )
    );
  }

  function handleOnLocation(e) {
    setLocation(e.target.value);
  }

  function filterData() {
    const regData = backupData.filter((item) => item.continent === location);
    return regData;
  }

  useEffect(() => {
    if (!location) {
      fetch("https://restcountries.com/v2/all")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setbackupData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(true);
          setIsLoading(false);
          setErrorMessage(err.message);
        });
    }
    setData(filterData());
  }, [location]);

  return (
    <Context.Provider
      value={{
        data,
        isLoading,
        setIsLoading,
        error,
        input,
        handleOnInput,
        location,
        handleOnLocation,
        backupData,
        lightMode,
        handleOnClick,
      }}
    >
      {isLoading ? (
        <h1 style={{ color: "white", padding: "1em" }}>LOADING DATA...</h1>
      ) : error ? (
        <h1 style={{ color: "white", padding: "1em" }}>
          {errorMessage}. Try again later...
        </h1>
      ) : (
        children
      )}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
