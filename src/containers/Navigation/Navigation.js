import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import MovieList from '../MoviesList';
import Movie from '../../components/Movie';

const Navigation = () => {
  const { path } = useRouteMatch();

  return (
    <Router>
      <Switch>
        <Route exact path={path}>
          <MovieList />
        </Route>
        <Route path={`${path}:movieId`}>
          <Movie />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
