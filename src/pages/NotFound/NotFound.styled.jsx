import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  :hover {
    color: lightblue;
  }`

export const NotFoundTitle = styled.h1`
text-align:center;
padding-top:50px;`  
