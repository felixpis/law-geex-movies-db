import { useState } from 'react';
import * as api from '../api/movies';

const cashe = {};

export function useMovie() {
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(false);
  
  const loadMovie = async (id) => {
    if (cashe[id]) {
      setMovie(cashe[id]);
      return;
    }
    setIsLoading(true);
    try {
      const data = await api.getMovie(id);
      if (data.Response){
        cashe[id] = data;
        setMovie(data);
      } else {
        setMovie(null);
      }
    } catch (error) {
      setMovie(null);
    } finally {
      setIsLoading(false);
    }
  }

  return [movie, loadMovie, isLoading];
}