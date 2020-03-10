import React, { Component } from "react";
import { post, urlDrugs, urldrugsInfo } from "../assest/Api";
import { Dropdown, Button } from "semantic-ui-react";

export default class PharmacyForm extends Component {
  state = {
    id: null,
    name: "",
    active_ingredient: "",
    strength: "",
    price: undefined,
    quantity: 0,
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
      console.log(typeof(parseInt(this.props.match.params.pharmacyId)));
      console.log(this.state)
      // add drug to drugs table.
      // post(urlDrugs, {
      //   name: this.state.name,
      //   active_ingredient: this.state.active_ingredient,
      //   strength: this.state.strength,
      //   image: this.state.image
      // })

  }
  
  render() {
    let drugs = []
    const drugsName = this.props.drugs.map((d,i) => {
      drugs[i]={text: d.name, value:d.id}
    });
    console.log(drugs)
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          background:
            "https://www.edarabia.com/ar/wp-content/uploads/2019/04/diseases-treated-colchicine.jpg"
        }}>
        {/* <label>Drug Name</label>
        <input
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />{" "} */}
        <br />
        <label>Active Ingredient</label>
        <input
          name="active_ingredient"
          onChange={this.handleChange}
          value={this.state.active_ingredient}
        />
        <br />
        <label>Strength</label>
        <input
          name="strength"
          onChange={this.handleChange}
          value={this.state.strength}
        />
        <br />
        <label>Price</label>
        <input
          name="price"
          onChange={this.handleChange}
          value={this.state.price}
        />
        <br />
        <label>Quantity</label>
        <input
          name="quantity"
          onChange={this.handleChange}
          value={this.state.quantity}
        />
        <br />
        <label>Drug Photo</label>
        <input
          name="image"
          onChange={this.handleChange}
          value={this.state.image}
        />
        <br />
        <label>Drug Name</label>
        <Dropdown
          placeholder="Select Drug"
          search
          selection
          name="name"
          value={this.state.name}
          options={drugs}
          onChange={this.handleChange}
        />
        <br />
        <br />
        {/* <button type="submit">Add Drug</button> */}
        <Button primary type="submit">
          Add Drug
        </Button>
      </form>
    );
  }
}
