import { configureStore } from '@reduxjs/toolkit';
import { selectStepReducer } from './reducers/selectStep/selectStepReducer';
import { lengthCounterReducer } from './reducers/lengthCounter/lengthCounterReducer';
import { passwordValueReducer } from './reducers/passwordValue/passwordValueReducer';
import submitFormReducer from './reducers/mock/getFormSubmissionSlice';

export const store = configureStore({
  reducer: {
    stepsReducer: selectStepReducer,
    lengthCounterReducer,
    passwordValueReducer,
    submitFormReducer,
  },
});
