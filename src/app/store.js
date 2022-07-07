import { configureStore } from '@reduxjs/toolkit';
import { selectStepReducer } from './reducers/selectStepReducer';
import { lengthCounterReducer } from './reducers/lengthCounterReducer';
import { passwordValueReducer } from './reducers/passwordValueReducer';

export const store = configureStore({
  reducer: {
    stepsReducer: selectStepReducer,
    lengthCounterReducer,
    passwordValueReducer,
  },
});
