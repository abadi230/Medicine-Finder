import React from "react";
import { Link } from "react-router-dom";

const PharmaciesList = ({ pharmacies }) => {
  const renderPharmacies = Object.keys(pharmacies).map((pharmacyId) => (
    <Link key={pharmacyId} to={`/pharmacies/${pharmacyId}`}>
      {pharmacies[pharmacyId]?.name}
      <br />
    </Link>
  ));
  return (
    <div>
      <h3>{renderPharmacies}</h3>
      <Link to='/pharmacies/new'>Add Drug</Link>
    </div>
  );
};

export default PharmaciesList;
