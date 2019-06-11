import reducer from './notesReducer';
import { NEW_NOTE, NEW_NOTE_PENDING, FETCH_NOTES, FETCH_NOTES_PENDING } from '../actions/notesAction';

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

  it('FETCH_NOTES action', () => {
    const initialState = {
      loading: true,
      list: []
    };
    const newState = reducer(initialState, {
      type: FETCH_NOTES,
      payload: [{ title: 'title', body: 'body' }]
    });
    expect(newState).toEqual({
      loading: false,
      list: [{ title: 'title', body: 'body' }]
    });
  });

  it('FETCH_NOTES_PENDING action', () => {
    const initialState = {
      loading: false,
      list: []
    };
    const newState = reducer(initialState, {
      type: FETCH_NOTES_PENDING,
    });
    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });

});
