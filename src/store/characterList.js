import axios from 'axios';
import md5 from 'md5';
import { publicKey, privateKey } from '../secrets';

// Initial State
const initialCharacterListState = [];

// ACTION TYPES
const RETRIEVED_CHARACTER_LIST = 'RETRIEVED_CHARACTER_LIST';

// Action Creators
export const retrievedCharacterList = characterList => ({
  type: RETRIEVED_CHARACTER_LIST,
  characterList
});

// Thunk Creators
export const fetchCharacterList = () => {
  return async dispatch => {
    const ts = Date.now();
    const hash = md5(ts + privateKey + publicKey)
    const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const response = await axios.get(url);
    const characterList = response.data.data.results;
    const action = retrievedCharacterList(characterList);
    dispatch(action);
  }
}

// Reducer
export default function(characterList = initialCharacterListState, action) {
  switch (action.type) {
    case RETRIEVED_CHARACTER_LIST:
      return action.characterList;
    default:
      return characterList;
  }
}
