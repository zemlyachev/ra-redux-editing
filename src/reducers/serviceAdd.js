import {
  CANCEL_SERVICE,
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
} from "../actions/actionTypes";

const initialState = {
  id: null,
  name: "",
  price: "",
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case EDIT_SERVICE:
      const { item } = action.payload;
      return { ...state, ...item };
    case CANCEL_SERVICE:
      return initialState;
    default:
      return state;
  }
}
