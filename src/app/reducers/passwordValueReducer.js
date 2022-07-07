import { types } from '../types/types';

const initialState = {
  password: '',
  secondPassword: '',
};
export const passwordValueReducer = (state = initialState, action) => {
  if (action.type === types.passwordValue) {
    return {
      ...state,
      password: action.payload.passwordValue,
    };
  }
  if (action.type === types.secondPasswordValue) {
    return {
      ...state,
      secondPassword: action.payload.passwordValue,
    };
  }

  return state;
};
