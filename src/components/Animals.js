import React, {useState, useEffect} from 'react';

function Animals() {

  const[animals, setAnimals] = useState([])
  const[error, setError] = useState(null)
  const[isLoaded, setIsLoaded] = useState(false)

  function makeApiCall() {
    fetch("https://afternoon-headland-99155.herokuapp.com/")
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
    })
  }
  
useEffect( () => {
  makeApiCall()
});
// const { error, isLoaded, animals } = useState;
if (error) {
  return <React.Fragment>Error: {error.message} </React.Fragment>
}else if (!isLoaded) {
  return <React.Fragment>Loading...</React.Fragment>
}else {
  return (
    <React.Fragment>
      <h1>Animals ~ (°∀°) </h1>
        <ul>
          <p>{animals.map((animal,index) => 
            <li key={index}>
              <p>{animal.name}</p>
              <p>kind:{animal.kind}</p>
              <p>age:{animal.age}</p>
            </li>)}</p>
        </ul>
    </React.Fragment>
  )
  }
}

export default Animals




