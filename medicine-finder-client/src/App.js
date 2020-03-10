import React, { Component } from "react";
import { get, urlDrugs, urlPharmacies, urldrugsInfo } from "./assest/Api";
import NavBar from "./componants/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DrugPage from "./containers/DrugPage";
import PharmacyPage from "./containers/PharmacyPage";

export default class App extends Component {
  state = {
    drugs: [],
    pharmacies: [],
    drugsInfo:[],
    filters: {
      sort: "mile"
    }
  };

  componentDidMount() {
    get(urlDrugs).then((drugs) => this.setState({ drugs: drugs }));
    get(urlPharmacies).then((pharmacies) =>
      this.setState({ pharmacies: pharmacies })
    );
    get(urldrugsInfo).then(drugsInfo => this.setState({drugsInfo: drugsInfo}))
    
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({
      filters: { ...this.state.filters, sort: value }
    });
  };
  fetchDrugs = () => {

  };
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route
              path="/drugs"
              render={(routerProps) => (
                <DrugPage
                  {...routerProps}
                  drugs={this.state.drugs}
                  drugsInfo={this.state.drugsInfo}
                  onChangeType={this.onChangeType}
                  onSort={this.fetchDrugs}
                />
              )}
            />
            <Route
              path="/pharmacies"
              render={(routerProps) => (
                <PharmacyPage
                  {...routerProps}
                  pharmacies={this.state.pharmacies}
                  drugs={this.state.drugs}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
