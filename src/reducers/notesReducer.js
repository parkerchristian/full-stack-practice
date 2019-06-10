import { NEW_NOTE, NEW_NOTE_PENDING } from '../actions/notesAction';

const initialState = {
  list: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.types) {
    case NEW_NOTE: 
      return { ...state, loading: false, list: [...state.list, action.payload] };
    case NEW_NOTE_PENDING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
