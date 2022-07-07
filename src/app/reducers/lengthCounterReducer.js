import { types } from '../types/types';

const initialState = {
  length: 0,
};
export const lengthCounterReducer = (state = initialState, action) => {
  if (action.type === types.length) {
    return {
      length: action.payload,
    };
  }
  return state;
};
