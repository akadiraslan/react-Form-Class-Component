import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  }


  render() {
    return (
      <main>
        <form>
          <input
            name="firstName"
            value={this.props.state.firstName}
            onChange={this.props.handleChange}
            placeholder="First Name"
          />
          <br />

          <input
            name="lastName"
            value={this.props.state.lastName}
            onChange={this.props.handleChange}
            placeholder="Last Name"
          />
          <br />

          <input
            name="age"
            value={this.props.state.age}
            onChange={this.props.handleChange}
            placeholder="Age"
          />
          <br />
          <input
            name="email"
            value={this.props.state.email}
            onChange={this.props.handleChange}
            placeholder="E-Mail"
          />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.props.state.gender === "male"}
              onChange={this.props.handleChange}
            />{" "}
            Male
          </label>

          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.props.state.gender === "female"}
              onChange={this.props.handleChange}
            />{" "}
            Female
          </label>

          <br />

          <select
            value={this.props.state.destination}
            name="destination"
            onChange={this.props.handleChange}
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
              onChange={this.props.handleChange}
              checked={this.props.state.isVegan}
            />{" "}
            Vegan?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.props.handleChange}
              checked={this.props.state.isKosher}
            />{" "}
            Kosher?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.props.handleChange}
              checked={this.props.state.isLactoseFree}
            />{" "}
            Lactose Free?
          </label>
          <br />

          <button>Submit</button>
        </form>
        
      </main>
    );
  }
}

export default Form;
