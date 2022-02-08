import React from "react";

function NewPlantForm({handleNameChange, handleImageChange, handlePriceChange, submitForm}) {

function handleName(e){
  handleNameChange(e)
}

function handleImage(e){
  handleImageChange(e)
}

function handlePrice(e){
  handlePriceChange(e)
}

function handleSub() {
  submitForm()
}
 
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSub}>
        <input onChange={handleName} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleImage}type="text" name="image" placeholder="Image URL" />
        <input onChange={handlePrice}type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
