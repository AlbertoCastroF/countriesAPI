import React, { useEffect, useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [backupData, setbackupData] = useState([]); // backupData will never change throughout the entire lifecycle of the app since it contains all the info of all countries in the world wich will be the main source of information for the other states (data and continentData).
  const [continentData, setContinentData] = useState([]); // continentData will contain all the countries in the selected continent and will be the main source of data for the data state.
  const [data, setData] = useState([]); // data will be the state provided to the other components and its main task is to keep the continent data filtered with the search bar.
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [input, setInput] = useState(""); // search bar state
  const [lightMode, setLightMode] = useState(false);

  //this function handles the activation of the lighmode
  function handleOnClick() {
    setLightMode((prevState) => !prevState);
  }

  //handleOnInput takes care of the countries filtered in the search bar
  function handleOnInput(e) {
    setInput(e.target.value);
    setData(
      continentData.filter((item) =>
        item.name.toLowerCase().includes(e.target.value)
      )
    );
  }

  //location is the name of the continent selected in the select component
  function handleOnLocation(e) {
    setLocation(e.target.value);
  }
  //in useEffect we fetch our data and will reset data everytime location changes
  useEffect(() => {
    //filter data filters the countries by continent wich is location
    function filterData() {
      let newData = [];
      if (location !== "All") {
        newData = backupData.filter((item) => item.region === location);
        return newData;
      } else {
        newData = backupData;
        return newData;
      }
    }
    if (!location) {
      fetch("https://restcountries.com/v2/all")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setContinentData(data);
          setbackupData(data);
          setIsLoading(false);
          setLocation("All");
        })
        .catch((err) => {
          setError(true);
          setIsLoading(false);
          setErrorMessage(err.message);
        });
    } else {
      setContinentData(filterData());
      //i set data here so it renders at the same time data is assigned to continent data
      setData(filterData());
    }
  }, [location, backupData]);

  //all the props passed to the other components
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
      {/* a message "loading data" will display while data is being fetched or
      and error message if data cant be retrieved */}
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
