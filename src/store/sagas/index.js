import md5 from 'md5';
import {privateKey, publicKey} from '../../secrets';
import axios from 'axios';
import {call, put, takeEvery, all} from 'redux-saga/effects';
import {retrievedCharacterList} from '../characterList';

// Sagas
const fetchCharacterList = () => {
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey)
  const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  return axios.get(url);
}

function* getCharacterList() {
  const response = yield call(fetchCharacterList);
  const characterList = response.data.data.results;
  yield put(retrievedCharacterList(characterList));
}

function* watchGetCharacterList() {
  yield takeEvery('GET_CHARACTER_LIST', getCharacterList);
}

export default function* rootSaga() {
  yield all([
    getCharacterList(),
    watchGetCharacterList()
  ])
}