import React from 'react';
import PropTypes from 'prop-types';

function Note({ note }) {
  return <p>{note.title}</p>;
}

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    _id: PropTypes.number.isRequired
  }).isRequired 
};

export default Note;
