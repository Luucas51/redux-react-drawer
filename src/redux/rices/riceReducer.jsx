import { BUY_RICES, EAT_RICES } from './riceTypes';


const initialState = {
  rices: 4
};

const ricesReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_RICES:
      return {
        ...state,
        rices: state.rices + 1
      };
    case EAT_RICES:
      return {
        ...state,
        rices: state.rices - 1 
      };
    default:
      return state;
  }
}

export default ricesReducer;