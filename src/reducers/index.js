import { combineReducers } from 'redux';
import notes from './notesReducer';
import session from './userReducer';

export default combineReducers({
  notes,
  session
});
