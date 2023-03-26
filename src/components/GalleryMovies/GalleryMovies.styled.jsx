import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMovie = styled.li`
width: 210px;
display: flex;
flex-direction: column;`

export const StyledLink = styled(Link)`
text-decoration: none;
display:block;
color:black;
    :hover {
        color:orangered;
    }`

export const StyledImg = styled.img`
width:100%;`