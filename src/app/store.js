import { configureStore } from '@reduxjs/toolkit';
import { selectStepReducer } from './reducers/selectStepReducer';
import { lengthCounterReducer } from './reducers/lengthCounter/lengthCounterReducer';
import { passwordValueReducer } from './reducers/passwordValueReducer';
import submitFormReducer from './reducers/mock/getFormSubmissionSlice';

export const store = configureStore({
  reducer: {
    stepsReducer: selectStepReducer,
    lengthCounterReducer,
    passwordValueReducer,
    submitFormReducer,
  },
});
