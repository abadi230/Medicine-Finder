import React from "react";

const DataList = ({ data, drug, pharmacy }) => {
  const { name, image } = drug;
  const price = data.price;

  
  // link to DrugsShow
  const handleClick = () =>{
    console.log(data.pharmacy.name)
  }

  return (
    <div className="card" 
      onClick={()=> handleClick(drug.id)}
      >
      <h4>{name}</h4>
      <img src={image} alt={name} />
      <h5>£{price}</h5>

      <a>
        <span role="img" aria-label="STAFF OF AESCULAPIUS">
          ⚕︎ 
        </span>{pharmacy.name}
      </a>
    </div>
  );
};

export default DataList;
