import React from "react";
import "./style.css";
function FormResults(props) {
  console.log(props)
  return (
      <main>
        
        <h2>Entered information:</h2>
        <p>
          Your name: {props.state.firstName} {props.state.lastName}
        </p>
        <p>Your age: {props.state.age}</p>
        <p>Your E-mail: {props.state.email}</p>
        <p>Your gender: {props.state.gender}</p>
        <p>Your destination: {props.state.destination}</p>
        <p>Your dietary restrictions:</p>

        <p>Vegan: {props.state.isVegan ? "Yes" : "No"}</p>
        <p>Kosher: {props.state.isKosher ? "Yes" : "No"}</p>
        <p>Lactose Free: {props.state.isLactoseFree ? "Yes" : "No"}</p>
      </main>
    );
  }
  

  
export default FormResults;
