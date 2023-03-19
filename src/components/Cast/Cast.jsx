// import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";


export default function Cast() {

    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    const KEY = `faab19b092cac6c59a97dec233a38f4d`;

    async function fetchCast() {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}`)
          setCast(response.data.cast)
          } catch (error) {
          console.log(error);
          }
    };

    useEffect(() => {
        fetchCast();
        // eslint-disable-next-line
    }, [movieId]);

    return (
        cast.map(item => (
            <div key={item.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt={item.character} />
                <p>{item.original_name}</p>
                <p>Character: {item.character}</p>
            </div>
        ))
    );


}; 