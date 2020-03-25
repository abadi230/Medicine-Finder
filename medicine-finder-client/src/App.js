import React, { Component } from "react";
import { get, urldrugsInfo } from "./assest/Api";
import NavBar from "./componants/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DrugPage from "./containers/DrugPage";
import PharmacyPage from "./containers/PharmacyPage";
import { connect } from "react-redux";
import {fetchDrugs, fetchPharmacies, fetchDrugsInfo} from './actions/drugs'

class App extends Component {
  state = {
    // drugs: [],
    // pharmacies: [],
    drugsInfo:[],
    filters: {
      sort: "mile"
    }
  };

  componentDidMount() {
    // get(urlDrugs).then((drugs) => this.setState({ drugs: drugs }));
    this.props.fetchDrugs()
    // get(urlPharmacies).then((pharmacies) =>
    //   this.setState({ pharmacies: pharmacies })
    // );
    this.props.fetchPharmacies();
    // get(urldrugsInfo).then(drugsInfo => this.setState({drugsInfo: drugsInfo}))
    this.props.fetchDrugsInfo()
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({
      filters: { ...this.state.filters, sort: value }
    });
  };
  sortDrugs = () => {

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
                  drugs={this.props.drugs}
                  drugsInfo={this.state.drugsInfo}
                  onChangeType={this.onChangeType}
                  onSort={this.sortDrugs}
                />
              )}
            />
            <Route
              path="/pharmacies"
              render={(routerProps) => (
                <PharmacyPage
                  {...routerProps}
                  pharmacies={this.props.pharmacies}
                  drugs={this.props.drugs}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  drugs: state.drugsReducer.drugs,
  pharmacies: state.pharmaciesReducer.pharmacies,
  drugsInfo: state.drugsInfoReducer.drugsInfo
});

export default connect(mapStateToProps, { fetchDrugs, fetchPharmacies, fetchDrugsInfo })(App);