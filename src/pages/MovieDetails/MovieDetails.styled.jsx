import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonBackLink = styled(NavLink)`
text-decoration: none;
color: black;
padding: 4px;
margin: 30px 15px;
:hover {
        color:orangered;
  }`

export const StyledImgMovie = styled.img`
width: 240px;`  

export const StyledCardMovie = styled.div`
display: flex;
gap: 10px;`

export const StyledGenreMovie = styled.p`
display: flex;
gap: 5px;`