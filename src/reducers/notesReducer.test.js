import reducer from './notesReducer';
import { NEW_NOTE } from '../actions/notesAction';

describe('Reducer Tests', () => {
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


});
