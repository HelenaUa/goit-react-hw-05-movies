import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {

  // const KEY = `faab19b092cac6c59a97dec233a38f4d`;
  // const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?`;

  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path="*" element={<NotFound />} />
          
          <Route path='/movies/:movieId' element={<MovieDetails />} >
            <Route path='/movies/:movieId/cast' element={<Cast />} />
            <Route path='/movies/:movieId/reviews' element={<Reviews />} />
          </Route>
        
        </Route>
      </Routes>
    
    </div>
  );
};
