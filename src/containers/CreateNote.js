import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NoteForm from '../components/notes/NoteForm';
import { connect } from 'react-redux';

class CreateNote extends PureComponent {
  static propTypes = {
    createNote: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.createNote({ title, body });
  } 
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, body } = this.state;
    return (
      <NoteForm onSubmit={this.handleSubmit} onChange={this.handleChange}
        title={title} body={body} submitText='Create Note' />
    );
  }
} 

const mapDispatchToProps = dispatch => ({
  createNote() {
    dispatch();
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateNote);
