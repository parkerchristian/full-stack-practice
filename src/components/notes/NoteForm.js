import React from 'react';
import PropTypes from 'prop-types';

function NoteForm({ onSubmit, submitText, title, body, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input name="title" value={title} onChange={onChange} />
      <input name="body" value={body} onChange={onChange} />
      <button>{submitText}</button>
    </form>
  );
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

NoteForm.defaultProps = {
  submitText: 'Submit'
};

export default NoteForm;
