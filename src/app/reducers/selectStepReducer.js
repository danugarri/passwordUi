import { types } from '../types/types';

const initialState = {
  hover1: true,
  hover2: false,
  hover3: false,
};
export const selectStepReducer = (state = initialState, action) => {
  if (action.type === types.steps) {
    return {
      steps: action.payload,
    };
  }
  return state;
};
