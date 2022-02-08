import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [addPlant, setAddPlant] = useState("")
  const [addImage, setAddimage] = useState("")
  const [addPrice, setAddPrice] = useState(0)

  function handleNameChange(e){
    setAddPlant(e.target.value)
  }

  function handleImageChange(e) {
    setAddimage(e.target.value)
  }

  function handlePriceChange(e) {
    setAddPrice(e.target.value)
  }

  function submitForm() {
  
      fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "name" : "addPlant",
          "image" : "addImage",
          "price" : addPrice
        })
      })
      .then(r=>r.json())
      .then(data => console.log(data))

  }

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r=>r.json())
      .then(data => setPlants(data))

  }, [])

  return (
    <main>
      <NewPlantForm handleNameChange={handleNameChange} handleImageChange={handleImageChange} handlePriceChange={handlePriceChange} submitForm={submitForm}/>
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;