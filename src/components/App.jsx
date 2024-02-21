// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const NavBar = lazy(() => import('./NavBar/NavBar'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage'));
const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetail = lazy(() => import('../Pages/MovieDetail'));
const CastInfo = lazy(() => import('./CastInfo/CastInfo'));
const ReviewsInfo = lazy(() => import('./ReviwesInfo/ReviwesInfo'));

function App() {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<b>Loding...please wait</b>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetail />}>
            <Route path="cast" element={<CastInfo />} />
            <Route path="reviews" element={<ReviewsInfo />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
