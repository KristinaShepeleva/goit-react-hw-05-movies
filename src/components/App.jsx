import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./HomePage/homePage'));
const Movies = lazy(() => import('../components/MoviesPage/MoviesPage'));



export const App = () => {
  return (
    <div>
      <Routes>
      <Route element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies/:movieId" element={<DetailsMovie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} /> */}
        {/* </Route> */}
        <Route path="*" element={<h1 style={{ color: 'red' }}>Error</h1>} />
      </Route>
    </Routes>
    </div>
  );
};




// const Home = lazy(() => import('../pages/Home'));
// const Movies = lazy(() => import('../pages/Movies'));
// const DetailsMovie = lazy(() => import('../pages/DetailsMovie'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Review = lazy(() => import('./Review/Review'));

// export const App = () => {
//   return (
//     <Routes>
//       <Route element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:movieId" element={<DetailsMovie />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Review />} />
//         </Route>
//         <Route path="*" element={<h1 style={{ color: 'red' }}>НЕ ЧІПАЙ URL</h1>} />
//       </Route>
//     </Routes>
//   );
// };