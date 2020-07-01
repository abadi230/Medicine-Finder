import React, { Component } from "react";
import { get, urldrugsInfo } from "./assest/Api";
import NavBar from "./componants/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DrugPage from "./containers/DrugPage";
import PharmacyPage from "./containers/PharmacyPage";
import { connect } from "react-redux";
import { fetchDrugs, fetchPharmacies, fetchDrugsInfo } from "./actions/drugs";
import Header from "./components-v2/Header";
import "./assest/App.css";
import Home from "./components-v2/Home";

class App extends Component {
  state = {
    // drugs: [],
    // pharmacies: [],
    drugsInfo: [],
    filters: {
      sort: "mile",
    },
    isQueried: false,
  };

  componentDidMount() {
    // get(urlDrugs).then((drugs) => this.setState({ drugs: drugs }));
    this.props.fetchDrugs();
    // get(urlPharmacies).then((pharmacies) =>
    //   this.setState({ pharmacies: pharmacies })
    // );
    this.props.fetchPharmacies();
    // to show all drugs in home component
    get(urldrugsInfo).then(drugsInfo => this.setState({drugsInfo: drugsInfo}))
    this.props.fetchDrugsInfo();
    
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({
      filters: { ...this.state.filters, sort: value },
    });
  };
  sortDrugs = () => {};

  handleSearch = (e) => {
    // add isQuered: false in state then try again

    e.persist();
    const query = e.target.value;

    if (query !== "") {
      this.setState({
        isQueried: true,
        drugsInfo: this.props.drugsInfo.filter((d) =>
          d.drug.name.includes(query)
        ),
      });
    } else {
      this.setState({
        isQueried: false,
        drugsInfo: this.props.drugsInfo,
      });
    }
    console.log(query);
    if (!this.state.isQueried) {
      console.log(this.props.drugsInfo);
      return this.props.drugsInfo;
    } else {
      console.log(
        this.props.drugsInfo.filter((d) => d.drug.name.includes(query))
      );
      return this.props.drugsInfo.filter((d) => d.drug.name.includes(query));
    }
  };
  render() {

    return (
      <Router>
        <div className="flex-container">
          <Header onChangeSearch={this.handleSearch} />
          {/* <NavBar /> */}
          <Switch>
            <Route
              path="/home"
              render={(routerProps) => (
                // <Home {...routerProps} drugsInfo={this.state.drugsInfo} />
                //v2
                <Home {...routerProps} drugsInfo={this.state.drugsInfo} drugs={this.props.drugs}/>
              )}
            />
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
  drugsInfo: state.drugsInfoReducer.drugsInfo,
});

export default connect(mapStateToProps, {
  fetchDrugs,
  fetchPharmacies,
  fetchDrugsInfo,
})(App);
