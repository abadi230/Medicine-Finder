import React from "react";
import DataShow from "./DataShow";
import { Link, Route, Switch } from "react-router-dom";
const Home = ({ match, drugsInfo, drugs }) => {
  
  // uniqe drugs
  const renderData2 = drugsInfo.map((data) => (
    <div key={data.id} className="card">
      <h4>{data.drug.name}</h4>
      <Link to={`/home/${data.drug.id}`}>
        <img src={data.drug.image} alt={data.drug.name} />
      </Link>


      <h5>£{data.price}</h5>

      <Link to={`/pharmacies/${data.pharmacy.id}`}>
        <span role="img" aria-label="STAFF OF AESCULAPIUS">
          ⚕︎
        </span>
        {data.pharmacy.name}
      </Link>
    </div>
  ));
  return (
    <div className="home">
      {/* {renderData2} */}
      <Switch>
      <Route
        exact path={`${match.url}/:drugId`}
        render={(routerProps) => (
          <DataShow {...routerProps} drugsInfo={drugsInfo} drugs={drugs} />
          )}
      />
          <Route path= {match.url} render={() => renderData2}/>
      </Switch>
    </div>
  );
};

export default Home;
