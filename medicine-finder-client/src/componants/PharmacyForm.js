import React, { Component } from "react";

export default class PharmacyForm extends Component {
  state = {
    name: "",
    active_ingredient: "",
    strength: "",
    dosage: "",
    image: ""
  };

  handleChange = e =>{
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleSubmit = e =>{
      e.preventDefault()
      // submit this.stat to Api
      console.log(this.state)

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{background:'https://www.edarabia.com/ar/wp-content/uploads/2019/04/diseases-treated-colchicine.jpg'}}>
        <lable>Drug Name</lable>
        {/* this.props.handleChange */}
        <input
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        /> <br/>
        <lable>Active Ingredient</lable>
        <input
          name="active_ingredient"
          onChange={this.handleChange}
          value={this.state.active_ingredient}
        /><br/>
        <lable>Strength</lable>
        <input
          name="strength"
          onChange={this.handleChange}
          value={this.state.strength}
        /><br/>
        <lable>Dosage</lable>
        <input
          name="dosage"
          onChange={this.handleChange}
          value={this.state.dosage}
        /><br/>
        <lable>Drug Photo</lable>
        <input
          name="image"
          onChange={this.handleChange}
          value={this.state.image}
        /><br/>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}
