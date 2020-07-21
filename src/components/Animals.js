import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeApiCall } from "./../actions";
import { useHistory } from "react-router-dom";
import * as a from "./../actions";
import AnimalDetail from "./AnimalDetail";
import { Link } from "react-router-dom";

function Animals(props) {
  console.log(props);
  // const [animals, setAnimals] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const { error, isLoading, animals } = props.apiResponse;
  const history = useHistory();

  useEffect(() => {
    const { dispatch } = props;
    dispatch(makeApiCall());
    return () => {};
  }, []);

  function handleClick(id) {
    const { dispatch } = props;
    const animal = animals.find((x) => x.id === id);
    console.log(animal);
    const action = a.selectAnimal(animal);
    dispatch(action);
    history.push(`/animal/${id}`);
  }

  if (error) {
    return <React.Fragment>Error: {error.message} </React.Fragment>;
  } else if (isLoading) {
    return <React.Fragment>Loading...</React.Fragment>;
  } else {
    return (
      <React.Fragment>
        <h1>Cats ~ ^°∀°^ </h1>
        <ul>
          {animals.map((animal, index) => (
            <li key={index}>
              <div>
                <p>{animal.name}</p>
                <Link to={`/animal/${animal.id}`}>
                  <img
                    id={index}
                    width="25%"
                    height="50%"
                    src={animal.imgUrl}
                    alt="photo of cat"
                    onClick={() => handleClick(animal.id)}
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // animals: state.animals,
    // isLoading: state.isLoading,
    // error: state.error,
    selectedAnimalReducer: state.selectedAnimal,
    apiResponse: state.apiResponse,
  };
};

export default connect(mapStateToProps)(Animals);
