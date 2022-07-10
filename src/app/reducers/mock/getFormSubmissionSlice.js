import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { submitForm } from '../../../services/api';

const initialState = {
  status: null,
  loading: false,
};

export const getFormSubmission = createAsyncThunk('[FORM]', async (passwordValue) => {
  const response = await submitForm(passwordValue);

  return response.status;
});

export const submitFormSlice = createSlice({
  name: 'form',
  initialState,

  extraReducers: (builder) => {
    builder
      .addMatcher(isPending(getFormSubmission), (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addMatcher(isFulfilled(getFormSubmission), (state, action) => {
        return {
          ...state,
          status: action.payload,
          loading: false,
        };
      })
      .addMatcher(isRejected(getFormSubmission), (state, action) => {
        return {
          ...state,
          status: action.payload,
          loading: false,
        };
      });
  },
});

export default submitFormSlice.reducer;
