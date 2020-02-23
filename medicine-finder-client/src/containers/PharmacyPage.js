import React from 'react'
import PharmaciesList from '../componants/PharmaciesList'
import { Switch, Route } from 'react-router-dom'
import PharmacyShow from '../componants/PharmacyShow'
import PharmacyForm from '../componants/PharmacyForm'

const PharmacyPage = ({match, pharmacies}) => {
    return (
        <div>
            <Switch>
                <Route path={`${match.url}/new`} render={props => <PharmacyForm {...props} pharmacies={pharmacies} />} />
                <Route path={`${match.url}/:pharmacyId`} render={props => <PharmacyShow {...props} pharmacies={pharmacies} />} />
                <Route path={match.url} render={()=> <PharmaciesList pharmacies={pharmacies} />} />
            </Switch>
        </div>
    )
}

export default PharmacyPage
