import React from "react";
import { Link } from "react-router-dom";

const DrugsList = ({ drugs }) => {
    
  const renderDrugs = Object.keys(drugs).map((drugId) => (
    <Link key={drugId} to={`/drugs/${drugId}`}>
      {drugs[drugId].name}
      <br />
    </Link>
  ));
  return (
    <div>
      <h3>{renderDrugs}</h3>
    </div>
  );
};

export default DrugsList;
