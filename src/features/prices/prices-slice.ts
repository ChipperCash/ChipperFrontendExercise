import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api, History} from '../../api';

interface PricesState {
  data: History | undefined;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any;
}

const initialState = {
  data: undefined,
  status: 'idle',
  error: null,
} as PricesState;

export const fetchPriceHistory = createAsyncThunk(
  'prices/fetchHistory',
  async () => {
    const response = await api.history();
    return response.parsedBody as History;
  },
);

const pricesSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPriceHistory.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchPriceHistory.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload || [];
    });
    builder.addCase(fetchPriceHistory.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const pricesSliceReducer = pricesSlice.reducer;
