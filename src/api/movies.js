import axios from 'axios';
import { Config } from '../config';
const BASE_URL = `${Config.apiUrl}?apikey=${Config.apiKey}&`;

const getData = response => response.data;

export function getMovies(query) {
  return axios.get(`${BASE_URL}s=${query}&type=movie`).then(getData);
}

export function getMovie(id) {
  return axios.get(`${BASE_URL}i=${id}&plot=full`).then(getData);
}