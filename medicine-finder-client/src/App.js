import React, { Component } from 'react'
import Filters from './componants/Filters'
import PharmacyForm from './componants/PharmacyForm'

export default class App extends Component {
  state = {
    filters: {
      sort: 'mile'
    }
  }

  onChangeType = ({ target: {value}}) =>{
    this.setState({
      filters: {...this.state.filters, sort: value}
    })
  }
  fetchDrugs = () =>{
    console.log('should display all drugs depends on type')
  }
  render() {
    return (
      <div>
        <Filters onChangeType={this.onChangeType} onSort={this.fetchDrugs} />
        <PharmacyForm />
      </div>
    );
  }
}
