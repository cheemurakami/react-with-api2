import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function AnimalDetail(props) {
  const { animal } = props;
  console.log(animal.selectedAnimal.name);
  // selectedAnimal(animal);

  return (
    <React.Fragment>
      <h2>Cat Details</h2>
      <p>{animal.selectedAnimal.name}</p>
      <p>{animal.selectedAnimal.breed}</p>
      <p>{animal.selectedAnimal.age}</p>
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
