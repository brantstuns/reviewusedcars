import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import AddReview from './components/AddReview';

export default function Router() {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/addReview" component={AddReview}/>
        </Switch>
      </App>
    </BrowserRouter>
  );
}
