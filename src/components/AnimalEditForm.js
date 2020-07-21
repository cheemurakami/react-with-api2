import React from 'react'

function AnimalEditForm() {

  // API patch func
  
  return (
    <React.Fragment>
      <form>
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
}

export default AnimalEditForm
