import React, { Component } from "react";
import "./style.css";
import Form from "Form.js"
import FormResults from "FormResults.js"

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      email : "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    };
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
  render(){
    return (
      <main>
        <Form state = {this.state}/>
        <FormResults />
      </main>
    );
  }
    
  }


export default App;
