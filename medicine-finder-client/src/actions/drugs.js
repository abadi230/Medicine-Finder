import { urlDrugs, get, urlPharmacies, urldrugsInfo } from "../assest/Api";

const fetchDrugs = () => (
     dispatch =>{
        dispatch({type: 'LOADING_DRUGS'})
        get(urlDrugs).then(drugs => dispatch(addDrugs(drugs)))
    }
);
// const fetchDrugs = () => {
//     return dispatch =>{
//         dispatch({type: 'LOADING_DRUGS'})
//         get(urlDrugs).then(drugs => dispatch(addDrugs(drugs)))
//     }
// };
// const addDrugs = (drugs) => {
//   return { type: "ADD_DRUGS", drugs };
// };

// store drugs from fetchDrug
const addDrugs = drugs =>({type: 'ADD_DRUGS', drugs})

const createDrug = drug =>({type: 'CREATE_DRUG', drug})

/***************** pharmacy action *****************/

const fetchPharmacies = () =>(
    dispatch => {
        dispatch({type: 'LOADING_PHARMACIES'})
        get(urlPharmacies).then(pharmacies => dispatch(addPharmacies(pharmacies)))
    }
)
const addPharmacies = (pharmacies) => ({type: 'ADD_PHARMACIES', payload: pharmacies})

// 
const createPharmacy = pharmacy =>({type: 'CREATE_PHARMACY', payload: pharmacy})

/***************** Drugs info action *****************/

const fetchDrugsInfo = () =>(
    dispatch => {
        dispatch({type: 'LOADING_INFO'})
        get(urldrugsInfo).then(data => dispatch(addDrugsInfo(data)))
    }
)
const addDrugsInfo = (drugsInfo) =>({type: 'ADD_DRUGS_INFO', payload: drugsInfo})

export { fetchDrugs, fetchPharmacies, createDrug, createPharmacy, fetchDrugsInfo };