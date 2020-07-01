import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assest/images/logo.jpg";
class Header extends Component {
  // state = {input: ''}

  // handleSearch = e =>{
  //   e.persist();
  //   this.setState({
  //     input: e.target.value
  //   })
  //   this.props.onChangeSearch(this.state.input)
  // }
  render(){

    return (
      <div className="nav">
        <div className="logo">
          <img id="logo" src={logo} alt="logo" />
        </div>
        <NavLink
          to="/home"
          id="home"
          activeStyle={{
            background: "darkblue",
          }}>
          Home
        </NavLink>
        <NavLink
          to="/drugs"
          exact
          id="drugs"
          activeStyle={{
            background: "darkblue",
          }}>
          Drugs
        </NavLink>
        <NavLink
          to="/pharmacies"
          exact
          id="pharmacies"
          activeStyle={{
            background: "darkblue",
          }}>
          Pharmacies
        </NavLink>

        <input
          onChange={this.props.onChangeSearch}
          id="search"
          type="text"
          name="search"
          placeholder="🔍"
          // value={this.state.input}
        />
        <NavLink
          to="/login"
          exaxt
          id="login"
          activeStyle={{
            background: "darkblue",
          }}>
          <span role="img" aria-label="silhouette of person">
            👤
          </span>
          Login
        </NavLink>
      </div>
    );
  }
};
export default Header;
