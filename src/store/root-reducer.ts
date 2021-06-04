import {combineReducers} from '@reduxjs/toolkit';
import {tradesSliceReducer} from '../features';

const rootReducer = combineReducers({
  trades: tradesSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
