const initialState = {
  pharmacies: [],
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOADING_PHARMACIES":
      return { ...state, pharmacies: [...state.pharmacies], loading: true };
    case "ADD_PHARMACIES":
      return {
        ...state,
        pharmacies: payload,
        loading: false
      };
    case "CREATE_PHARMACY":
      return {
        ...state,
        pharmacies: [...state.pharmacies, payload]
      };
    default:
      return state;
  }
};
