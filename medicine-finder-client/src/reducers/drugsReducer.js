const initialState = {
  drugs: [],
  loading: false
};

const drugsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_DRUGS":
      return { ...state, drugs: [...state.drugs], loading: true };

    case "ADD_DRUGS":
      return {
        ...state,
        drugs: action.drugs,
        loading: false
      };

    default:
      return state;
  }
};
export default drugsReducer