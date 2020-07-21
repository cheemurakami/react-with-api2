import React, { useState, useEffect } from "react";

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [image, setImage] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(
        "https://afternoon-headland-99155.herokuapp.com/api/v1/animals/search?kind=cat"
      ),
      fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&api_key=${process.env.REACT_APP_API_KEY}&breed_id=beng`
      )
    ])
      .then(function (responses) {
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          })
        );
      })
      .then(function (data) {
        setAnimals(data[0]);
        setImage(data[1]);
        setIsLoaded(true)
        console.log(data);//array of 2 api data
        console.log(data[0]); //array
        console.log(data[1]); //array
      })
      .catch(function (error) {
        console.log(error);
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
              </li>
            ))}
          </p>

          {image.map((cat, index) => (
            <li key={index}>
              <img id={index} width="25%" height="50%" src={cat.url} alt="photo of cat" />
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
export default Animals;










 // .then(response => response.json())
  // .then(
  //   (jsonifiedResponse) => {
  //     setIsLoaded(true);
  //     setAnimals(jsonifiedResponse)
  //     setImage(jsonifiedResponse)
  //   }
  // )
  // .catch((error) => {
  //   setIsLoaded(true);
  //   setError(error)
  // });

  // function makeCelestesApiCall() {

  // .then(response => response.json())
  // .then(
  //   (jsonifiedResponse) => {
  //     setIsLoaded(true);
  //     setImage(jsonifiedResponse)
  //   }
  // )
  //console.log(jsonifiedResponse)
  //   .catch((error) => {
  //     setIsLoaded(true);
  //     setError(error)
  //   })
  // ])

  // useEffect( () => {

  // )}, []);