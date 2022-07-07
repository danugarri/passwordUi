import { types } from '../types/types';

export const lengthCounterAction = (length, actionType) => {
  return {
    type: types[actionType],
    payload: {
      inputLength: length,
    },
  };
};
