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
  error: null,
};
//  Asynchronous call to the submitForm mock
export const getFormSubmission = createAsyncThunk('[FORM]', async (passwordValue) => {
  const response = await submitForm(passwordValue);

  return response.status;
});
// Slice to handle promise
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
      .addMatcher(isRejected(getFormSubmission), () => {
        return {
          status: 401,
          loading: false,
          error: 'Promise rejected, inserted pruebaKO123',
        };
      });
  },
});

export default submitFormSlice.reducer;
