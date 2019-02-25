import { connect } from 'react-redux';

import { fetchCharacterList } from '../../store/characterList';
import CharacterListPresentational from './CharacterListPresentational';

const mapState = state => ({
  characterList: state.characterList
});

const mapDispatch = dispatch => ({
  loadCharacterList: () => dispatch(fetchCharacterList())
});

const CharacterListContainer = connect(
  mapState,
  mapDispatch
)(CharacterListPresentational);

export default CharacterListContainer;