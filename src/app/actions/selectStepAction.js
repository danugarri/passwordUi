import { types } from '../types/types';

export const selectStepAction = (step1, step2, step3) => {
  return {
    type: types.steps,
    payload: {
      step1,
      step2,
      step3,
    },
  };
};
