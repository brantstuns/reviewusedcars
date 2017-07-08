import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import AddReview from './components/AddReview';
import Reviews from './components/Reviews';
import About from './components/About';
import Contact from './components/Contact';

export default function Router() {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/addReview" component={AddReview}/>
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </App>
    </BrowserRouter>
  );
}
