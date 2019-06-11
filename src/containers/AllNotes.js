import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Notes from '../components/notes/Notes';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/notesAction';
import { getNotes, getNotesLoading } from '../selectors/notesSelectors';

class AllNotes extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    notes: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { notes, loading } = this.props;
    if(loading) return <h1>**Loading**</h1>;

    return <Notes notes={notes} />;
  }
}

const mapStateToProps = state => ({
  notes: getNotes(state),
  loading: getNotesLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchNotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllNotes);
