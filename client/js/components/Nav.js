import React from 'react';
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <Link to='/' className="navbar-brand">Review Used Cars</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                  <li>
                      <Link to='/reviews'>Reviews</Link>
                  </li>
                  <li>
                      <Link to='/addReview'>Add A Review</Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/contact">Contact</Link>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  );
}
