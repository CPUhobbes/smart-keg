import Types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.LOAD_API:
      return state.setIn(['api'], action.apiData);

    // UPDATE SETTING
    case Types.UPDATE_SETTING: {
      const { key, value } = action;

      if (Array.isArray(key)) return state.setIn([...key], value);
      return state.setIn([key], value);
    }
    default:
      return state;
  }
}
