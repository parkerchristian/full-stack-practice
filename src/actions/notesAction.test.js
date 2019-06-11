import { newNote, fetchNotes } from './notesAction';

jest.mock('../services/notesApi.js', () => ({
  createNote() {
    return Promise.resolve([]);
  },
  getNotes() {
    return Promise.resolve([]);
  }
}));

describe('Notes Action Tests', () => {
  it('action to create a note', () => {
    const noteAction = newNote({
      title: 'the title',
      body: 'the body'
    });

    expect(noteAction).toEqual({
      type: 'NEW_NOTE',
      pendingType: 'NEW_NOTE_PENDING',
      fulfilledType: 'NEW_NOTE_FULFILLED',
      rejectedType: 'NEW_NOTE_REJECTED',
      payload: expect.any(Promise)
    });
  });

  it('action to fetch notes', () => {
    const noteAction = fetchNotes();

    expect(noteAction).toEqual({
      type: 'FETCH_NOTES',
      pendingType: 'FETCH_NOTES_PENDING',
      fulfilledType: 'FETCH_NOTES_FULFILLED',
      rejectedType: 'FETCH_NOTES_REJECTED',
      payload: expect.any(Promise)
    });
  });
  
});
