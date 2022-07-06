import { configureStore } from '@reduxjs/toolkit';
import { selectStepReducer } from './reducers/selectStepReducer';

export const store = configureStore({
  reducer: {
    stepsReducer: selectStepReducer,
  },
});
