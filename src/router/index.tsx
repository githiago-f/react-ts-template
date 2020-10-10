import React from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from 'pages/Home';

export const BaseRoutes = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  );
};
