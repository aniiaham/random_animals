import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://zoo-animal-api.herokuapp.com/animals/rand";

function App() {
  const [animalData, setAnimailData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://zoo-animal-api.herokuapp.com/animals/rand")
        .then((res) => {
          setAnimailData(res.data);
        })
        .catch((error) => {
          // console.log(error)
        });
    };
     fetchData();
  }, []);

  return (
    <div className="App">
      <DisplayAnimals animalData={animalData} />
    </div>
  );
}

export default App;

const DisplayAnimals = (props) => {
  const { animalData } = props;
  console.log("THIIIIIIS", animalData);
  return (
    <div>
        <div>{animalData.name}</div>
    </div>
  );
};
