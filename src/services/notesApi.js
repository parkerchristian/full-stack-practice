export const createNote = note => {
  return Promise.resolve({
    id: '123',
    ...note
  });
};
