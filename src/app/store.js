import { configureStore } from '@reduxjs/toolkit';
import { selectStepReducer } from './reducers/selectStepReducer';
import { lengthCounterReducer } from './reducers/lengthCounterReducer';

export const store = configureStore({
  reducer: {
    stepsReducer: selectStepReducer,
    lengthCounterReducer: lengthCounterReducer,
  },
});
