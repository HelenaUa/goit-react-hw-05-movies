import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, StyledHeader, StyledNav, StyledLink } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';


export const Layout = () => {
    return (
        <Container>

            <StyledHeader>
                <StyledNav>
                    <StyledLink to="/" end>Home</StyledLink>
                    <StyledLink to="/movies">Movies</StyledLink>
                </StyledNav> 
            </StyledHeader>
            
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>

        </Container>
    )
};