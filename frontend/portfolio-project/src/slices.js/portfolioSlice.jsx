import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPortfolio = createAsyncThunk('portfolio/fetch', async (_, thunkAPI) => {
  const token = thunkAPI.getState().user.token;
  const res = await axios.get('/portfolio', {
    headers: { Authorization: token }
  });
  return res.data;
});

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: { assets: [], loading: false },
  extraReducers: builder => {
    builder
      .addCase(fetchPortfolio.pending, state => { state.loading = true })
      .addCase(fetchPortfolio.fulfilled, (state, action) => {
        state.loading = false;
        state.assets = action.payload;
      })
      .addCase(fetchPortfolio.rejected, state => { state.loading = false });
  }
});
export default portfolioSlice.reducer;