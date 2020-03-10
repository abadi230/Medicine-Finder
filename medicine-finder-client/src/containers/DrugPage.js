import React from "react";
import DrugsList from "../componants/DrugsList";
import { Route, Switch } from "react-router-dom";
import DrugsShow from "../componants/DrugsShow";
import Filters from "../componants/Filters";


const DrugPage = ({ match, drugs, drugsInfo, onChangeType, onSort }) => {
  return (
    <div>
      <Filters onChangeType={onChangeType} onSort={onSort} />
      <Switch>
        <Route
          path={`${match.url}/:drugId`}
          render={(routerProps) => (
            <DrugsShow
              {...routerProps}
              drugs={drugs}
              drugInfo={drugsInfo}
            />
          )}
        />
        <Route path={match.url} render={() => <DrugsList drugs={drugs} />} />
      </Switch>
    </div>
  );
};

export default DrugPage;
