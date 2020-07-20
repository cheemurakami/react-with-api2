import React, {useState, useEffect} from 'react';

function Animals() {

  const[animals, setAnimals] = useState([])
  const[error, setError] = useState(null)
  const[isLoaded, setIsLoaded] = useState(false)
  const[image, setImage] = useState([])
  

  // function makeCheesApiCall() {
  //   fetch("https://afternoon-headland-99155.herokuapp.com/api/v1/animals/search?kind=cat")
  //   .then(response => response.json())
  //   .then(
  //     (jsonifiedResponse) => {
  //       setIsLoaded(true);
  //       setAnimals(jsonifiedResponse)
  //     }
  //   )
  //   .catch((error) => {
  //     setIsLoaded(true);
  //     setError(error)
  //   })
  // }

  function makeCelestesApiCall() {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_id=beng&api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        setIsLoaded(true);
        setImage(jsonifiedResponse[0])
      }
    )
    .catch((error) => {
      setIsLoaded(true);
      setError(error)
    })
  }
      useEffect( () => {
        //makeCheesApiCall()
        makeCelestesApiCall()
      }, []);
      
  console.log(image.id);
// const { error, isLoaded, animals } = useState;
if (error) {
  return <React.Fragment>Error: {error.message} </React.Fragment>
} else if (!isLoaded) {
  return <React.Fragment>Loading...</React.Fragment>
} else {
  return (
    <React.Fragment>
      <h1>Cats and dogs ~ ^°∀°^ </h1>
        <ul>
          {/* <p>{animals.map((animal,index) => 
            <li key={index}>
              <p>{animal.name}</p>
              <p>Kind:{animal.kind}</p>
              <p>Age:{animal.age}</p>
              <p>Breed:{animal.breed}</p>
            </li>
            )}
          </p> */}


          <img width='25%' height='50%' src={image.url} alt="photo of cat"/>
        </ul>
    </React.Fragment>
  )
  }
}

export default Animals




