import React from "react";
import { Link } from "react-router-dom";

const DataShow = ({ match, drugsInfo, drugs }) => {
//   console.log(match.params.drugId);

  let drugId = match.params.drugId
  const drug = drugs[drugId];
  let data = drugsInfo?.filter((d) => d.drug.id === drug.id);

  const info = data.map((d) => {
      console.log(d.pharmacy.name);
    return (
      <React.Fragment key={d.id}>
        <h4>Pharmacy: {d.pharmacy.name}</h4>
        <h4>Price: {d.price}</h4>
        <h4>Quantity: {d.quantity}</h4>
        <h5>{d.pharmacy.location}</h5>
      </React.Fragment>
    );
  });
  return (
    <div>
      <h1>Data Show</h1>
      <h2>Name: {drug?.name} </h2>
          <h4>Active Ingredient: {drug?.active_ingredient}</h4>
          <h5>Strength: {drug?.strength}</h5>
          <img src={drug?.image} alt={drug?.name} />
      <br />
          {info}

      <Link to="/home">Back</Link>
    </div>
  );
};

export default DataShow;
