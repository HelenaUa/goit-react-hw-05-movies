// import PropTypes from 'prop-types';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import { ButtonBackLink } from './MovieDetails.styled';


const MovieDetails = () => {

  const { movieId } = useParams();
  // console.log(movieId);
  const [movie, setMovie] = useState([]);
  // const [data, setData] = useState([]);
  // console.log(data);
  const location = useLocation();
  const goBackLink = location.state?.from ?? "/";

  const KEY = `faab19b092cac6c59a97dec233a38f4d`;

  async function fetchFullInfoMovie () {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`);
      setMovie(response.data) } catch (error) {
      console.log(error);
    }
  };
  // console.log(fetchFullInfoMovie ());

  useEffect(() => {
    // if (data === []) {
    //   return;
    // }
    fetchFullInfoMovie();
    // setData(movieId);
     // eslint-disable-next-line
  }, [movieId]);

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <>
      <ButtonBackLink to={goBackLink}>Go back</ButtonBackLink>
      {/* <p>MovieDetails: {movieId}</p> */}
      <div>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
        {/* console.log(${movie.poster_path}); */}
        <div>
          <h2>{movie.original_title}</h2>
          <p>User score: {movie.vote_average}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie.genres}
          </p>
        </div>
      </div>

      <div>
         <p>Additional information</p>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
      </div>
      
    </>
  );
};

export default MovieDetails;