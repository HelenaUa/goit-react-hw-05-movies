import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
margin: 0 auto;
padding: 0 16px;`

export const StyledHeader = styled.header`
display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 12px;
padding-left: 25px;
margin-bottom: 16px;
border-bottom: 1px solid black;

> nav {
    display: flex;
  }`

export const StyledNav = styled.nav`
display: flex;
flex-direction: row;
gap: 15px;`

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  font-weight: 500;
  &.active {
   color: white;
   background-color: orangered;
  }`