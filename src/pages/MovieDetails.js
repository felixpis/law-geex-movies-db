import { Spin } from 'antd';
import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import styled from 'styled-components'
import LabelValue from '../components/LabelValue';
import { useMovie } from '../hooks/useMovie';

const Root = styled.div`
  display: flex;
`;

const Meta = styled.div`
  margin-left: 20px;
`;

const MovieDetails = () => {
  const {id} = useParams();
  /**
   * @type {[Movie, (id: string) => Promise<void>, boolean]}
   */
  const [movie, loadMovie, isLoading] = useMovie();
  useEffect(() => {
    if (id) {
      loadMovie(id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  if (isLoading || !movie) {
    return <Spin size="large" />
  }
  return (
    <Root>
      <img src={movie.Poster} alt="" />
      <Meta>
        <LabelValue label="Title">{movie.Title}</LabelValue>
        <LabelValue label="Released">{movie.Released}</LabelValue>
        <LabelValue label="Rated">{movie.Rated}</LabelValue>
        <LabelValue label="Runtime">{movie.Runtime}</LabelValue>
        <LabelValue label="Genre">{movie.Genre}</LabelValue>
        <LabelValue label="Director">{movie.Director}</LabelValue>
        <LabelValue label="Writer">{movie.Writer}</LabelValue>
        <LabelValue label="Actors">{movie.Actors}</LabelValue>
        <LabelValue label="Plot">{movie.Plot}</LabelValue>
        <LabelValue label="Language">{movie.Language}</LabelValue>
        <LabelValue label="Country">{movie.Country}</LabelValue>
      </Meta>
    </Root>
  )
}

export default MovieDetails
