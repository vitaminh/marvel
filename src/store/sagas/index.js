import { all } from 'redux-saga/effects';

import { getCharacterList, watchGetCharacterList } from './comicSagas';

export default function* rootSaga() {
  yield all([
    getCharacterList(),
    watchGetCharacterList()
  ])
}