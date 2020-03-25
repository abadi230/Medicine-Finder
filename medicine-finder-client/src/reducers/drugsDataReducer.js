const initialState = {
    drugsInfo: [],
    loading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
      case "LOADING_INFO":
        return { ...state, drugsInfo: [...state.drugsInfo], loading: true };

        case 'ADD_DRUGS_INFO':
            return {
                ...state,
                drugsInfo: payload,
                loading: false
            }
      default:
        return state;
    }
}
