const urlBase = "http://127.0.0.1:3000/";
const urlDrugs = urlBase + "api/v1/drugs";
const urlPharmacies = urlBase + "api/v1/pharmacies";

const get = (url) => fetch(url).then((res) => res.json());

export { urlDrugs, urlPharmacies, get };
