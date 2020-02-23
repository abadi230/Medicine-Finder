
import React from 'react'
import { Link } from 'react-router-dom'

const DrugsShow = ({match, drugs}) => {
    let drugId = match.params.drugId
    const drug = drugs[drugId]
    console.log(drug?.name)
    return (
      <div>
        <h2>Name: {drug?.name} </h2>
        <h4>Active Ingredient: {drug?.active_ingredient}</h4>
        <h5>Strength: {drug?.strength}</h5>
        <img src={drug?.image} alt={drug?.name} />
        <br/>
        <Link to='/drugs'>Back</Link>
      </div>
    );
}

export default DrugsShow
