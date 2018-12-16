import { combineReducers } from 'redux';
import settings from './settings';

const rootReducer = combineReducers({
  // short hand property names
  settings,
});

export default rootReducer;
