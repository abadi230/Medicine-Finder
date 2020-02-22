import React, { Component } from "react";
import Filters from "./componants/Filters";
import PharmacyForm from "./componants/PharmacyForm";
import { get, urlDrugs, urlPharmacies } from "./assest/Api";
import NavBar from "./componants/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DrugPage from "./containers/DrugPage";
import PharmacyPage from "./containers/PharmacyPage";

export default class App extends Component {
  state = {
    drugs: [],
    pharmacies: [],
    filters: {
      sort: "mile"
    }
  };

  componentDidMount() {
    get(urlDrugs).then((drugs) => this.setState({ drugs: drugs }));
    get(urlPharmacies).then((pharmacies) =>
      this.setState({ pharmacies: pharmacies })
    );
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({
      filters: { ...this.state.filters, sort: value }
    });
  };
  fetchDrugs = () => {
    console.log("should display all drugs depends on type");
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
                <DrugPage {...routerProps} drugs={this.state.drugs} />
              )}
            />
            <Route
              path="/pharmacies"
              render={(routerProps) => (
                <PharmacyPage
                  {...routerProps}
                  pharmacies={this.state.pharmacies}
                />
              )}
            />
          </Switch>
          <Filters onChangeType={this.onChangeType} onSort={this.fetchDrugs} />
          <PharmacyForm />
        </div>
      </Router>
    );
  }
}
