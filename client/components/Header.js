import React from 'react';


export default function Header () {
  return (
    <header id='top' className='header'>
      <div className='text-vertical-center'>
          <h1 className='headerText'>Review Used Cars</h1>
          <h3 className='headerText'>Help Us Help You Not Get Scammed!</h3>
          <br />
          <a href='#about' className='btn btn-dark btn-lg aboutButton'>Find Out More</a>
      </div>
    </header>
  );
};
