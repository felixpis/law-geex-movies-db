import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Root = styled(Link)`
  box-shadow: 7px 6px 8px -3px rgba(0,0,0,0.82);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 300px;
  
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
  }
`;

const Meta = styled.div`
  color: black;
  margin: 4px;
`;

const Title = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 200px;
  white-space: nowrap;
  font-weight: bold;
`;

/**
 * 
 * @param {object} param0 
 * @param {Movie} param0.movie
 * @returns 
 */
const MovieCard = ({movie}) => {
  return (
    <Root to={`/${movie.imdbID}`}>
      <ImageContainer>
        <img src={movie.Poster} alt={movie.Title} />
      </ImageContainer>
      <Meta>
        <Title>
          {movie.Title}
        </Title>
        <div>
          {movie.Year}
        </div>
      </Meta>
    </Root>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.any
}

export default MovieCard
