import React from "react";
import "./style.css";

function Form (props) {
    
    return (
      <main>
      <div>
      
        <form>
          <input
            type="text" 
            class="form-control"
            name="firstName"
            value={props.state.firstName}
            onChange={props.handleChange}
            placeholder="First Name"
          />
          <br />

          <input
            type="text" 
            class="form-control"
            name="lastName"
            value={props.state.lastName}
            onChange={props.handleChange}
            placeholder="Last Name"
          />
          <br />

          <input
            type="text" 
            class="form-control"
            name="age"
            value={props.state.age}
            onChange={props.handleChange}
            placeholder="Age"
          />
          <br />
          <input
            type="text" 
            class="form-control"
            name="email"
            value={props.state.email}
            onChange={props.handleChange}
            placeholder="E-Mail"
          />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={props.state.gender === "male"}
              onChange={props.handleChange}
            />{" "}
            Male
          </label>

          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={props.state.gender === "female"}
              onChange={props.handleChange}
            />{" "}
            Female
          </label>

          <br />

          <select
            value={props.state.destination}
            name="destination"
            onChange={props.handleChange}
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="germany">Germany</option>
            <option value="norway">Norway</option>
            <option value="north pole">North Pole</option>
            <option value="south pole">South Pole</option>
          </select>

          <br />

          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={props.handleChange}
              checked={props.state.isVegan}
            />{" "}
            Vegan?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={props.handleChange}
              checked={props.state.isKosher}
            />{" "}
            Kosher?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={props.handleChange}
              checked={props.state.isLactoseFree}
            />{" "}
            Lactose Free?
          </label>
          <br />

          <button>Submit</button>
        </form>
        </div>
      </main>
    );
  
}

export default Form;
