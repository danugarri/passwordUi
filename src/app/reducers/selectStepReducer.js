import { types } from '../types/types';

const initialState = {
  steps: {
    step1: true,
    step2: false,
    step3: false,
  },
};
export const selectStepReducer = (state = initialState, action) => {
  if (action.type === types.steps) {
    return {
      steps: action.payload,
    };
  }
  return state;
};
