import React, { useState, useEffect } from "react";

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://afternoon-headland-99155.herokuapp.com/api/v1/animals/search?kind=cat")
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        setIsLoaded(true);
        setAnimals(jsonifiedResponse)
      }
    )
    .catch((error) => {
      setIsLoaded(true);
      setError(error)
    });
    return () => {};
  }, []);

 
  if (error) {
    return <React.Fragment>Error: {error.message} </React.Fragment>;
  } else if (!isLoaded) {
    return <React.Fragment>Loading...</React.Fragment>;
  } else {
    return (
      <React.Fragment>
        <h1>Cats and dogs ~ ^°∀°^ </h1>
        <ul>
          <p>
            {animals.map((animal, index) => (
             
              <li key={index}>
                <p>{animal.name}</p>
                <p>Kind:{animal.kind}</p>
                <p>Age:{animal.age}</p>
                <p>Breed:{animal.breed}</p>
                <img id={index} width="25%" height="50%" src={animal.imgUrl} alt="photo of cat" />
              </li>
            ))}
          </p>
        </ul>
      </React.Fragment>
    );
  }
}

export default Animals;










 

  