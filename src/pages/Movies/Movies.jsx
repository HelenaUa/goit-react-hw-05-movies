// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { StyledForm, StyledInput, StyledButton } from './Movies.styled';
import GalleryMovies from "components/GalleryMovies/GalleryMovies";
import { ListStyled } from "../Home/Home.styled";


const Movies = () => {
  
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  const KEY = `faab19b092cac6c59a97dec233a38f4d`;
  const BASE_URL = `https://api.themoviedb.org/3/search/movie?`;

  async function fetchMovieSearchByName(productName) {
  try {
  const response = await axios.get(`${BASE_URL}api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${productName}`)
  setData(response.data.results)
  } catch (error) {
  console.log(error);
  }
  }

  const handleChange = (event) => {
        setName(event.currentTarget.value)
  };
  
  // const onSubmit = (data) => {
  //   setName(data);
  //   // setPerPage(12);
  //   // setPage(1);
  // };

  const formSubmit = (event) => {
        event.preventDefault();

        if (name.trim() === '') {
            alert('Please enter name');
            return;
        };

        fetchMovieSearchByName(productName);
        setName('');
        // onSubmit(name);
        // setName('');
  };
  
  useEffect(() => {
    if (data === []) {
      return;
    }
    fetchMovieSearchByName(productName);
     // eslint-disable-next-line
  }, [data, productName]);
  
  useEffect(() => {
    if (productName === '') {
      setSearchParams({})
    }
  }, [productName,setSearchParams]);

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <div> 
      <div>
        <StyledForm formSubmit={formSubmit}>
          <StyledInput type="text"
                    name="name"
                    autocomplete="off"
                    // autofocus
                    placeholder="Search name"
                    value={name}
                    onChange={handleChange}
          />
          <StyledButton type="submit">Search</StyledButton>
        </StyledForm>
        <ListStyled>
          <GalleryMovies data={data}/>
        </ListStyled>
      </div>

      {/* <div>
      {['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5'].map(dog => {
        return (
          <Link key={dog} to={`${dog}`}>
            {dog}
          </Link>
        );
      })}
      </div> */}
    </div>
    
  );
};

export default Movies;