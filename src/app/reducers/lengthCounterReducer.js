import { types } from '../types/types';

const initialState = {
  hintLength: 0,
  passwordLength: 0,
  secondPasswordLength: 0,
};
export const lengthCounterReducer = (state = initialState, action) => {
  if (action.type === types.hintLength) {
    return {
      ...state,
      hintLength: action.payload.lengths.hintLength,
    };
  }
  if (action.type === types.passwordLength) {
    return {
      ...state,
      passwordLength: action.payload.lengths.passwordLength,
    };
  }
  if (action.type === types.secondPasswordLength) {
    return {
      ...state,
      secondPasswordLength: action.payload.lengths.secondPasswordLength,
    };
  }
  return state;
};
