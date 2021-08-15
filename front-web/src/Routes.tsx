import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HeaderBar from './core/components/Header';
import Login from './pages/Login';
import Movie from './pages/Movies';

const Routes = () =>(
      
    <BrowserRouter>
        <HeaderBar />
    <Switch>
      <Route path="/" exact>
          <Login />
      </Route>
      <Route path="/movie">
          <Movie />
      </Route>
      <Route path="/movies/id">
          <Login />
      </Route>
    </Switch>
  </BrowserRouter>
  
);

export default Routes;