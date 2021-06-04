import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api, History} from '../../api';

interface TradesState {
  data: History | undefined;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: any;
}

const initialState = {
  data: undefined,
  status: 'idle',
  error: null,
} as TradesState;

export const fetchTradeHistory = createAsyncThunk(
  'trades/fetchHistory',
  async () => {
    const response = await api.history();
    return response.parsedBody as History;
  },
);

const tradesSlice = createSlice({
  name: 'trade',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTradeHistory.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchTradeHistory.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload || [];
    });
    builder.addCase(fetchTradeHistory.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export const tradesSliceReducer = tradesSlice.reducer;
