import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const listedPlants = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} />
  })
  return (
    <ul className="cards">{listedPlants}</ul>
  );
}

export default PlantList;