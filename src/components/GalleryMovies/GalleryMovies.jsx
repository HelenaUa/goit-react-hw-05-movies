import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { StyledMovie, StyledLink, StyledImg } from "./GalleryMovies.styled";
import noImage from '../../image/no_image.png';


export default function GalleryMovies({data}) {
    const location = useLocation();

    return (
        data.map(item => (
            <StyledMovie key={item.id}>
                <StyledLink to={`/movies/${item.id}`} state={{from:location}}>
                    <StyledImg
                        src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : noImage }
                        alt={item.title} />
                <h4>{item.title}</h4>
                </StyledLink>
            </StyledMovie>
        ))
    )
};

GalleryMovies.propTypes = {
    data: PropTypes.array,
};