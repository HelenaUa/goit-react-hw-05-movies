import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
margin: 0 auto;
padding: 0 16px;`

export const StyledHeader = styled.header`
padding-left: 25px;`

export const StyledNav = styled.nav`
display: flex;
flex-direction: row;
gap: 15px;`

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
   color: white;
   background-color: orangered;
  }`