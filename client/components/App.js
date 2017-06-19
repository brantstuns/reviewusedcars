import React from 'react';
import Hey from './Hey';
import SearchBar from './SearchBar';
import Header from './Header';
import About from './About';
import FeatureTitle from './FeatureTitle';
import Features from './Features';
import Nav from './Nav';

export default function App () {
   return (
     <div>
       <Nav />
       <Header />
       <About />
       <FeatureTitle />
       <Features count={4} />
     </div>
   );
};
