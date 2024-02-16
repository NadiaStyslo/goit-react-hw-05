import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from '../Pages/Home/Home';
import Movies from '../Pages/Movies/Movies';
import NotFoundPage from '../Pages/NotFound/NotFoundPage';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
