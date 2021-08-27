import { Router, Switch, Route} from 'react-router-dom';
import HeaderBar from './core/components/Header';
import MovieDetails from './core/components/MovieDetails';
import Home from './pages/Home';
import Movie from './pages/Movies';
import history from './core/utils/history';

const Routes = () =>(
      
    <Router history={history}>
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
  </Router>
  
);

export default Routes;