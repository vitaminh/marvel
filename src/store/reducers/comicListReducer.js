import { RETRIEVED_COMIC_LIST } from '../constants'

// Initial State
const initialComicListState = [];

// Action Creators
export const retrievedComicList = comicList => ({
  type: RETRIEVED_COMIC_LIST,
  comicList
});

// Reducer
const comicListReducer = (comicList = initialComicListState, action) => {
  switch (action.type) {
    case RETRIEVED_COMIC_LIST:
      return action.comicList;
    default:
      return comicList;
  }
}

export default comicListReducer;