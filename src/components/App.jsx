import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';


const HomePage = lazy(() => import('../page/HomePage/homePage'));
const Movies = lazy(() => import('../page/MoviesPage/MoviesPage'));
const DetailsMoviePage = lazy(() => import('../page/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));


export const App = () => {
  return (
    
      <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<DetailsMoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<p>This page was not found
</p>} />
      </Route>
    </Routes>
   
  );
};




