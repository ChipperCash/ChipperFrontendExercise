import {combineReducers} from '@reduxjs/toolkit';
import {counterSliceReducer} from '../features';

const rootReducer = combineReducers({
  counter: counterSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
