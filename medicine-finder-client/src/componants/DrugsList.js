import React from "react";
import { Link } from "react-router-dom";

const DrugsList = ({ drugs }) => {
    
  const renderDrugs = Object.keys(drugs).map((drugId) => (
    <React.Fragment key={drugId}>
      <Link to={`/drugs/${drugId}`}>
        {drugs[drugId].name}
        <br />
      </Link>
      {/* <h2>Price = {drugs[drugId].price}</h2> */}
    </React.Fragment>
  ));
  
  return (
    <div className='home'>
      
      <h3>{renderDrugs}</h3>
    </div>
  );
};

export default DrugsList;
