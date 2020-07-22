import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'


function AnimalDetail(props) {
  const { animal } = props;
  console.log(animal.selectedAnimal.name);

  function deleteAnimal(){
    fetch(`https://afternoon-headland-99155.herokuapp.com/api/v1/animals/${animal.selectedAnimal.id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        alert('DELETED')
        console.log("SUCCESS:", jsonifiedResponse)
      }
    ).catch((error) => {
      console.log(error);
    })
      
  }
  

  return (
    <React.Fragment>
      <div className="cat-detail">
        <h2>Kitty Info</h2>
        <Image width="25%" height="50%" src={animal.selectedAnimal.imgUrl} alt="photo of cat" roundedCircle/>
        <p>Name: {animal.selectedAnimal.name}</p>
        <p>Breed: {animal.selectedAnimal.breed}</p>
        <p>Age: {animal.selectedAnimal.age}</p>
      </div>
      <div className="returnList">
        <button>Take me with you</button>
      </div>
      <div className="returnList">
        <button onClick={deleteAnimal}>Delete me</button>
      </div>
      <div className="returnList">
        <Link to={"/editanimals"}>Edit me</Link>
      </div>
      <div className="returnList">
        <Link to={"/"}>Return to Animals List</Link>
      </div>
    </React.Fragment>
  );
}

AnimalDetail.propTypes = {
  animal: PropTypes.object,
};

const mapStateToProps = (state) => {
  console.log(state.selectedAnimalReducer);
  return {
    animal: state.selectedAnimalReducer,
  };
};

export default connect(mapStateToProps)(AnimalDetail);
