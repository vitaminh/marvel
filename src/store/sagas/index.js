import { all } from 'redux-saga/effects';

import { getComicList, watchGetComicList } from './comicSagas';
import { getCharacterList, watchGetCharacterList } from './characterSagas';

export default function* rootSaga() {
  yield all([
    getCharacterList(),
    watchGetCharacterList(),
    getComicList(),
    watchGetComicList()
  ])
}