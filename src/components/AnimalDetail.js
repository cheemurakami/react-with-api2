import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'


function AnimalDetail(props) {
  const { animal } = props;
  console.log(animal.selectedAnimal.name);
  

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
      <div className="returnList"><Link to={"/"}>Return to Animals List</Link></div>
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
