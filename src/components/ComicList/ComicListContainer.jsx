import { connect } from 'react-redux';

import ComicListPresentational from './ComicListPresentational';

const mapState = state => ({
  comicList: state.comicListReducer
});

const ComicListContainer = connect(
  mapState
)(ComicListPresentational);

export default ComicListContainer;