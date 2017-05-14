import React from 'react';
import Hey from './Hey';
import SearchBar from './SearchBar';
import Header from './Header';
import About from './About';
import FeatureTitle from './FeatureTitle';
import Features from './Features';

export default function App () {
   return (
     <div>
       <Header />
       <About />
       <FeatureTitle />
       <Features count={4} />
     </div>
   );
};
