import { useLocation } from "react-router-dom";
// import { Link } from 'react-router-dom';
import { StyledMovie, StyledLink, StyledImg } from "./GalleryMovies.styled";


export default function GalleryMovies({data}) {
    const location = useLocation();

    return (
        data.map(item => (
            <StyledMovie key={item.id}>
                <StyledLink to={`/movies/${item.id}`} state={{from:location}}>
                <StyledImg src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title}/>
                <h4>{item.title}</h4>
                </StyledLink>
            </StyledMovie>
))
    )
};