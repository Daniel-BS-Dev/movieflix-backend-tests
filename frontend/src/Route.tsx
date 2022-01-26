import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Authorization from './pages/Authorization';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MoviesDetails from './pages/MoviesDetails';
import MovieDetails from './pages/MoviesDetails/MovieDetails';


const DRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/*" element={<Authorization />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MoviesDetails />} />
    </Routes>
  </Router>
);

export default DRoutes;