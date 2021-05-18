import {combineReducers} from '@reduxjs/toolkit';
import {pricesSliceReducer} from '../features';

const rootReducer = combineReducers({
  prices: pricesSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
