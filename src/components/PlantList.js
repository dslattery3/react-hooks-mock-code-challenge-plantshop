import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const listedPlants = plants.map(plant => <PlantCard key={plant.name plant=>{plant}/>)

  return (
    <ul className="cards">{/* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
