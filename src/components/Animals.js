import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeApiCall } from "./../actions";
import { useHistory } from "react-router-dom";
import * as a from "./../actions";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


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
        <h3 className="cats">Our Cats ~ ^°∀°^ </h3>
        
        <Container className="container">
          <div className="row">
          {animals.map((animal, index) => (
            <div className="column">
              <div className="animal-item">
                  <p>{animal.name}</p>
                  {/* <Col s={10} md={4}> */}
                    <Link to={`/animal/${animal.id}`}>
                      <Image
                        id={index}
                        src={animal.imgUrl}
                        className="cat-image"
                        alt="photo of cat"
                        onClick={() => handleClick(animal.id)}
                        thumbnail
                      />
                      <div>{animal.name}</div>
                    </Link>
                  {/* </Col> */}
                
              </div>
            </div>
            
          ))}
          </div>
          </Container>
        <Link to="/newanimals">
          <button>Add a new animal</button>
        </Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedAnimalReducer: state.selectedAnimal,
    apiResponse: state.apiResponse,
  };
};

export default connect(mapStateToProps)(Animals);
