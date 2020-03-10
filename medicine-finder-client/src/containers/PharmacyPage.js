import React from 'react'
import PharmaciesList from '../componants/PharmaciesList'
import { Switch, Route } from 'react-router-dom'
import PharmacyShow from '../componants/PharmacyShow'
import PharmacyForm from '../componants/PharmacyForm'

const PharmacyPage = ({match, pharmacies, drugs}) => {
    /**
     * form to add pharmacy(name and location)
     * form to add drugs belong to specific pharmacy
     */
    return (
      <div>
        <Switch>
          <Route
            path={`${match.url}/:pharmacyId/new`}
            render={(props) => (
              <PharmacyForm {...props} pharmacies={pharmacies} drugs={drugs} />
            )}
          />
          <Route
            path={`${match.url}/:pharmacyId`}
            render={(props) => (
              <PharmacyShow {...props} pharmacies={pharmacies} />
            )}
          />
          <Route
            path={match.url}
            render={() => <PharmaciesList pharmacies={pharmacies} />}
          />
        </Switch>
      </div>
    );
}

export default PharmacyPage
