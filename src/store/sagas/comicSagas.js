import md5 from 'md5';
import {privateKey, publicKey} from '../../secrets';
import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {retrievedCharacterList} from '../reducers/characterListReducer';

// Sagas
const fetchCharacterList = () => {
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey)
  const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  return axios.get(url);
}

export function* getCharacterList() {
  const response = yield call(fetchCharacterList);
  const characterList = response.data.data.results;
  yield put(retrievedCharacterList(characterList));
}

export function* watchGetCharacterList() {
  yield takeEvery('GET_CHARACTER_LIST', getCharacterList);
}