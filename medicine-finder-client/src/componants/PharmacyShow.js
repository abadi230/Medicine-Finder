import React from "react";
import { Link } from "react-router-dom";

const PharmacyShow = ({ match, pharmacies }) => {
  const pharmacy = pharmacies[match.params.pharmacyId];
  return (
    <div>
      <h3>{pharmacy?.name}</h3>
      <h4>{pharmacy?.location}</h4>
      <Link to="/pharmacies">Back</Link>  {"| "}
      <Link to={`${match.url}/new`}>Add Drug</Link>
    </div>
  );
};

export default PharmacyShow;
