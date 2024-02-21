// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
import NotFoundPage from '../Pages/NotFoundPage/';
import MovieDetail from '../Pages/MovieDetail';
import CastInfo from '../components/CastInfo/CastInfo';
import ReviewsInfo from '../components/ReviwesInfo/ReviwesInfo';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetail />}>
          <Route path="cast" element={<CastInfo />} />
          <Route path="review" element={<ReviewsInfo />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
