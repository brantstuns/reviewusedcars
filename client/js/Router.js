import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home}/>
      </App>
    </BrowserRouter>
  );
}
