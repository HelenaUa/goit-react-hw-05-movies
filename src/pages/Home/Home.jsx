// import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import axios from "axios";
import GalleryMovies from "components/GalleryMovies/GalleryMovies";
import { ListStyled } from "./Home.styled";


const Home = () => {

  const [data, setData] = useState([]);
  const KEY = `faab19b092cac6c59a97dec233a38f4d`;

  async function fetchMovieRating() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`);
      setData(response.data.results)
    } catch (error) {
    console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieRating();
     // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <ListStyled>
        <GalleryMovies data={data}/>
    </ListStyled>
  )
};

export default Home;