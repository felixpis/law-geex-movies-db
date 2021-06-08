import { useState } from 'react';
import { useRecoilState } from 'recoil';
import * as api from '../api/movies';
import { moviesState } from '../state/atoms';

const cashe = {};

export function useMovies() {
  const [movies, setMovies] = useRecoilState(moviesState);
  const [isLoading, setIsLoading] = useState(false);
  
  const loadMovies = async (query) => {
    if (cashe[query]) {
      setMovies(cashe[query]);
      return;
    }
    setIsLoading(true);
    try {
      const data = await api.getMovies(query);
      if (data.Search){
        setMovies(data.Search);
        cashe[query] = data.Search;
      } else {
        setMovies([]);
      }
    } catch (error) {
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  }

  return [movies, loadMovies, isLoading];
}