import React from "react";
import DrugsList from "../componants/DrugsList";
import { Route, Switch } from "react-router-dom";
import DrugsShow from "../componants/DrugsShow";
import Filters from "../componants/Filters";
import PharmacyForm from "../componants/PharmacyForm";

const DrugPage = ({ match, drugs, onChangeType, onSort }) => {
  return (
    <div>
      <Filters onChangeType={onChangeType} onSort={"this.fetchDrugs"} />
      <Switch>
        <Route
          path={`${match.url}/:drugId`}
          render={(routerProps) => <DrugsShow {...routerProps} drugs={drugs} />}
        />
        <Route path={match.url} render={() => <DrugsList drugs={drugs} />} />
      </Switch>
    </div>
  );
};

export default DrugPage;
