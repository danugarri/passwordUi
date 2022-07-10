import { types } from '../types/types';

const initialState = {
  hintLength: 0,
  passwordLength: 0,
  secondPasswordLength: 0,
};
// Reducer
export const lengthCounterReducer = (state = initialState, action) => {
  if (action.type === types.hintLength) {
    return {
      ...state,
      hintLength: action.payload.inputLength,
    };
  }
  if (action.type === types.passwordLength) {
    return {
      ...state,
      passwordLength: action.payload.inputLength,
    };
  }
  if (action.type === types.secondPasswordLength) {
    return {
      ...state,
      secondPasswordLength: action.payload.inputLength,
    };
  }
  return state;
};
