const urlBase = "http://127.0.0.1:3000/";
const urlDrugs = urlBase + "api/v1/drugs";
const urlPharmacies = urlBase + "api/v1/pharmacies";
const urldrugsInfo = urlBase + "api/v1/drug_pharmacies";

const createFetchConfig = (bodyData, httpMethod) => {
  return {
    method: httpMethod,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyData)
  };
};

const get = (url) => fetch(url).then((res) => res.json());

const post = (url, body) => fetch(url, createFetchConfig(body, "POST"));

const patch = (url, id, body) => fetch(`${url}/${id}`, createFetchConfig(body, "PATCH"))
export { urlDrugs, urlPharmacies,urldrugsInfo, get, post, patch };
