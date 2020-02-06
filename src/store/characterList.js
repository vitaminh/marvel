// Initial State
const initialCharacterListState = [];

// ACTION TYPES
const RETRIEVED_CHARACTER_LIST = 'RETRIEVED_CHARACTER_LIST';

// Action Creators
export const retrievedCharacterList = characterList => ({
  type: RETRIEVED_CHARACTER_LIST,
  characterList
});

// Reducer
export default function(characterList = initialCharacterListState, action) {
  switch (action.type) {
    case RETRIEVED_CHARACTER_LIST:
      return action.characterList;
    default:
      return characterList;
  }
}
