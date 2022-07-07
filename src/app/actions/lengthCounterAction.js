import { types } from '../types/types';

export const lengthCounterAction = (length) => {
  return {
    type: types.length,
    payload: length,
  };
};
