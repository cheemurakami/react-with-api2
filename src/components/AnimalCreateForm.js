import React from 'react'

function AnimalCreateForm() {
  //curry!!!!!API post func

  function addCat(event){
    event.preventDefault();

    const inputtedData = {
      name: event.target.name.value,
      kind: event.target.kind.value,
      age: event.target.age.value,
      breed: event.target.breed.value,
      imgUrl: event.target.imgUrl.value
    }

    // const request = {
    //   method: 'POST',
    //   body: JSON.stringify(inputtedData),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // }
    console.log(inputtedData)
    // fetch("https://afternoon-headland-99155.herokuapp.com/api/v1/animals/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   mode: "no-cors",
    //   body: JSON.stringify(inputtedData),
    // })
    // .then(response => response.json())
    // .then(
    //   (jsonifiedResponse) => {
    //     console.log("SUCCESS:", jsonifiedResponse)
    //   }
    // ).catch((error) => {
    //   console.log(error);
    // })
  }
  
  return (
    <React.Fragment>
      <form onSubmit={addCat}>
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
        <button type="submit">Add</button>
      </form>
      
      
    </React.Fragment>
  )
};

export default AnimalCreateForm
