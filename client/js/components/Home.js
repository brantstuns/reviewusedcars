import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Section from './Section';

export default function Home() {
  return (
    <div>
      <Nav />
      <Header headerId='header1' />
      <Section />
      <Header headerId='header2' />
    </div>
  );
}
