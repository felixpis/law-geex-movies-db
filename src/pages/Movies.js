import React, { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import SearchForm from '../components/SearchForm';
import { useMovies } from '../hooks/useMovies';
import { selectedYearState } from '../state/atoms';

/**
 * Get years releases list from found movies
 * @param {Movie[]} movies 
 */
const getYears = (movies) => {
  const yearsObj = movies.reduce((prev, movie) => {
    if (!prev[movie.Year]) {
      prev[movie.Year] = true;
    }
    return prev;
  }, {});

  return Object.keys(yearsObj).sort();
}

/**
 * Filter movies by year
 * @param {Movie[]} movies 
 * @param {string} filter 
 */
const filterMovies = (movies, filter) => {
  return !filter ? movies : movies.filter(movie => movie.Year === filter);
}

const MoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 20px;
`;

const Movies = () => {
  /**
   * @type {[Movie[], (query: string) => Promise<void>]}
   */
  const [movies, loadMovies, isLoading] = useMovies();
  const [filter, setFilter] = useRecoilState(selectedYearState);

  const handleSearch = (query) => {
    setFilter('');
    loadMovies(query);
  }
  
  const handleFilter = (value) => {
    setFilter(value);
  }
  
  const years = useMemo(() => getYears(movies), [movies]);
  const filteredMovies = useMemo(() => filterMovies(movies, filter), [movies, filter])
  return (
    <div>
      <SearchForm onSearch={handleSearch} years={years} year={filter} onFilter={handleFilter} isLoading={isLoading} />
      <MoviesList>
        {filteredMovies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}
      </MoviesList>
    </div>
  )
}

export default Movies
