import React, { useState } from 'react'
import { connect } from "react-redux";
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";


function AnimalEditForm(props) {
  const { animal } = props; 
  const [ showUpdatedMsg, setShowUpdatedMsg] = useState(false);

  function editCat(event){
    event.preventDefault();
    const inputtedData = {
      name: event.target.name.value,
      kind: event.target.kind.value,
      age: event.target.age.value,
      breed: event.target.breed.value,
      imgUrl: event.target.imgUrl.value
    }

    console.log(inputtedData)
    fetch(`https://afternoon-headland-99155.herokuapp.com/api/v1/animals/${animal.selectedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputtedData),
    })
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        setShowUpdatedMsg(true)
        console.log("SUCCESS:", jsonifiedResponse)
      }
    ).catch((error) => {
      console.log(error);
    })
  }

  const updateMsg = () => {
    if(showUpdatedMsg){
      return <p>curry Updated</p>
    }
  }

  return (
    <React.Fragment>
      {updateMsg()}
      <div className="cat-detail">
        <h2>You are editing me</h2>
        <Image width="25%" height="50%" src={animal.selectedAnimal.imgUrl} alt="photo of cat" roundedCircle/>
          <p>Name: {animal.selectedAnimal.name}</p>
          <p>Age: {animal.selectedAnimal.age}</p>
          <p>Breed:{animal.selectedAnimal.breed}</p>
      </div>
      <form onSubmit={editCat}>
        <input type="text" name="name" placeholder="Name"></input>
        <br />
        <input type="text" name="kind" placeholder="Cat"></input>
        <br />
        <input type="text" name="age" placeholder="Age"></input>
        <br />
        <input type="text" name="breed" placeholder="Breed"></input>
        <br />
        <input type="text" name="imgUrl" placeholder="Image URL"></input>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div className="returnList">
        <button><Link to={"/"}>Back to List</Link></button>
      </div>
      
      
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    animal: state.selectedAnimalReducer,
  };
}
export default connect(mapStateToProps)(AnimalEditForm);
