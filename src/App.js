import React, { useState } from "react";
import data from './data'
import Tours from "./componenrts/Tours";

const App = () => {

  const [tours,settours]=useState(data);

  // ye remove tour ka logic hai
  function removeTour(id){
    const newTours=tours.filter(tour=>tour.id!==id);
    settours(newTours);
  } 

  // agar saare ke saare tour ko remove krdunga toh vaha pe refresh button aayega toh usko click krne se se dubara saare tour aajaynege ye uska logic hai
 if(tours.length===0){
  return(
    <div className="refresh">
       <h2>No Tours Left</h2>
       <button className="btn-white" onClick={()=>settours(data)}>
        Refresh
       </button>
    </div>
  );
 }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
