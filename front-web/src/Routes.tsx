import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HeaderBar from './core/components/Header';
import Home from './pages/Home';
import Movie from './pages/Movies';

const Routes = () =>(
      
    <BrowserRouter>
        <HeaderBar />
    <Switch>
      <Route path="/" exact>
          <Home/>
      </Route>
      <Route path="/movie">
          <Movie />
      </Route>
      <Route path="/movies/id">
          <Home />
      </Route>
    </Switch>
  </BrowserRouter>
  
);

export default Routes;