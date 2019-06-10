import reducer from './notesReducer';
import { NEW_NOTE, NEW_NOTE_PENDING } from '../actions/notesAction';

describe('Note Reducer Tests', () => {
  it('NEW_NOTE action', () => {
    const initialState = {
      loading: true,
      list: []
    };
    const newState = reducer(initialState, {
      type: NEW_NOTE,
      payload: {
        title: 'the title',
        body: 'the body'
      }
    });
    expect(newState).toEqual({
      loading: false,
      list: [{
        title: 'the title',
        body: 'the body'
      }]
    });
  });

  it('NEW_NOTE_PENDING action', () => {
    const initialState = {
      loading: false,
      list: []
    };
    const newState = reducer(initialState, {
      type: NEW_NOTE_PENDING
    });

    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });

});
