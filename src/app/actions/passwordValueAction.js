import { types } from '../types/types';

export const passwordValueAction = (value, actionType) => {
  return {
    type: types[actionType],
    payload: {
      passwordValue: value,
    },
  };
};
