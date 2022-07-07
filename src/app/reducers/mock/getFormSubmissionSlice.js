import { createAsyncThunk, createSlice, isFulfilled, isPending } from '@reduxjs/toolkit';
import { submitForm } from '../../../services/api';

const initialState = {
  status: null,
};

export const getFormSubmission = createAsyncThunk('[FORM]', async (e, passwordValue) => {
  const response = await submitForm(e, passwordValue);

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
        };
      })
      .addMatcher(isFulfilled(getFormSubmission), (state, action) => {
        return {
          ...state,
          status: action.payload,
        };
      });
  },
});

export default submitFormSlice.reducer;
