// import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { StyledReviews } from './Reviews.styled';


export default function Reviews() {

    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    const KEY = `faab19b092cac6c59a97dec233a38f4d`;

    async function fetchReview() {
        try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}`)
        setReviews(response.data.results)
        } catch (error) {
        console.log(error);
        }
    };

    useEffect(() => {
        fetchReview();
      // eslint-disable-next-line
    }, [movieId]);

    return (
        reviews.map(item => (
            <StyledReviews key={item.author}>
                <h3>{item.author}</h3>
                <p>{item.content}</p>
            </StyledReviews>
        ))
    ); 
    
};