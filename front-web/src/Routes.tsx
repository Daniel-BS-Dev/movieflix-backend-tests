import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HeaderBar from './core/components/Header';
import MovieDetails from './core/components/MovieDetails';
import Home from './pages/Home';
import Movie from './pages/Movies';

const Routes = () =>(
      
    <BrowserRouter>
        <HeaderBar />
    <Switch>
      <Route path="/" exact>
          <Home/>
      </Route>
      <Route path="/movies" exact>
          <Movie />
      </Route>
      <Route path="/movies/:id">
          <MovieDetails />
      </Route>
    </Switch>
  </BrowserRouter>
  
);

export default Routes;