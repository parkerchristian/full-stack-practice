import { NEW_NOTE } from '../actions/notesAction';

const initialState = {
  list: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.types) {
    case NEW_NOTE: 
      return { ...state, loading: false, list: [...state.list, action.payload] };
    default:
      return state;
  }
}
