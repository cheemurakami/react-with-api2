import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

function AnimalCreateForm() {
  function addCat(event) {
    event.preventDefault();

    const inputtedData = {
      name: event.target.name.value,
      kind: event.target.kind.value,
      age: event.target.age.value,
      breed: event.target.breed.value,
      imgUrl: event.target.imgUrl.value,
    };

    console.log(inputtedData);
    fetch("https://afternoon-headland-99155.herokuapp.com/api/v1/animals/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputtedData),
    })
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        console.log("SUCCESS:", jsonifiedResponse);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <React.Fragment>
      <div className="form-container">
        <div className="form-header">Add a New Cat</div>
        <Form onSubmit={addCat}>
          <Form.Group controlId="name-input">
            <div className="text-left">
              <Form.Label>Name</Form.Label>
            </div>
            <Form.Control type="text" name="name" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="kind-input">
            <div className="text-left">
              <Form.Label>Kind</Form.Label>
            </div>
            <Form.Control type="text" name="kind" placeholder="Cat" />
          </Form.Group>
          <Form.Group controlId="age-input">
            <div className="text-left">
              <Form.Label>Age</Form.Label>
            </div>
            <Form.Control type="text" name="age" placeholder="Age" />
          </Form.Group>
          <Form.Group controlId="breed-input">
            <div className="text-left">
              <Form.Label>Breed</Form.Label>
            </div>
            <Form.Control type="text" name="breed" placeholder="Breed" />
          </Form.Group>
          <div className="text-left">
            <Form.Label>Image URL</Form.Label>
          </div>
          <Form.Group controlId="img-input">
            <Form.Control type="text" name="imgUrl" placeholder="Image URL" />
          </Form.Group>
          <button type="submit">Add Cat</button>
        </Form>
      </div>
      <div className="returnList">
        <Link to={"/"}>Return to Animals List</Link>
      </div>
    </React.Fragment>
  );
}

export default AnimalCreateForm;
