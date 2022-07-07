import { types } from '../types/types';

export const lengthCounterAction = (length1, actionType) => {
  return {
    type: types[actionType],
    payload: {
      lengths: {
        hintLength: length1,
      },
    },
  };
};
export const lengthPasswordAction = (length2, actionType) => {
  return {
    type: types[actionType],
    payload: {
      lengths: {
        passwordLength: length2,
      },
    },
  };
};
export const lengthSecondPasswordAction = (length3, actionType) => {
  return {
    type: types[actionType],
    payload: {
      lengths: {
        secondPasswordLength: length3,
      },
    },
  };
};
