import { types } from '../types/types';

export const selectStepAction = (hover1, hover2, hover3) => {
  return {
    type: types.steps,
    payload: {
      hover1,
      hover2,
      hover3,
    },
  };
};
