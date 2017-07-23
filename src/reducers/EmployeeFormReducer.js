import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
} from "../actions/types";

const INITIALIZE_STATE = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = INITIALIZE_STATE, action) => {
  switch(action.type) {
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case EMPLOYEE_CREATE:
      return INITIALIZE_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIALIZE_STATE;
    default:
      return state;
  }
};
