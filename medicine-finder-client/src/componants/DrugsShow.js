import React from "react";
import { Link } from "react-router-dom";

const DrugsShow = ({ match, drugs, drugInfo }) => {
  let drugId = match.params.drugId;
  const drug = drugs[drugId];
  let data = drugInfo?.filter((d) => d.drug.id === drug.id);
  const info = data.map((d) => {
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
      <h2>Name: {drug?.name} </h2>
      <h4>Active Ingredient: {drug?.active_ingredient}</h4>
      <h5>Strength: {drug?.strength}</h5>
      <img src={drug?.image} alt={drug?.name} />
      {info}
      <br />
      <Link to="/drugs">Back</Link>
    </div>
  );
};
DrugsShow.defaultProps ={
  strength: undefined,
  image: undefined
}
export default DrugsShow;
