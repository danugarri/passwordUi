import { configureStore } from '@reduxjs/toolkit';
import { selectStepReducer } from '../../app/reducers/selectStep/selectStepReducer';
import { lengthCounterReducer } from '../../app/reducers/lengthCounter/lengthCounterReducer';
import { passwordValueReducer } from '../../app/reducers/passwordValue/passwordValueReducer';
import submitFormReducer from '../../app/reducers/mock/getFormSubmissionSlice';
import { Provider } from 'react-redux';

export const store = configureStore({
  reducer: {
    stepsReducer: selectStepReducer,
    lengthCounterReducer,
    passwordValueReducer,
    submitFormReducer,
  },
});

export const reduxWrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
