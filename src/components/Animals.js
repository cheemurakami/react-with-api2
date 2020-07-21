import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';

function Animals(props) {
  // const [animals, setAnimals] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const { error, isLoading, animals } = props;

  useEffect(() => {
    const { dispatch } = props
    dispatch(makeApiCall());
    return () => {};
  }, []);

  console.log(animals)
  if (error) {
    return <React.Fragment>Error: {error.message} </React.Fragment>;
  } else if (isLoading) {
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
                <img id={index} width="25%" height="50%" src={animal.imgUrl} alt="photo of cat" />
                {/* <p>Kind:{animal.kind}</p>
                <p>Age:{animal.age}</p>
                <p>Breed:{animal.breed}</p> */}
              </li>
            ))}
          </p>
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    animals: state.animals,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Animals);










 

  