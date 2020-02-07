import md5 from 'md5';
import { privateKey, publicKey } from '../../secrets';
import axios from 'axios';

// Helper function that
// 1. generates necessary url and
// 2. fetches data from Marvel's API
export const fetchData = (partialUrl) => {
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey)
  const url = partialUrl + `ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  return axios.get(url);
}