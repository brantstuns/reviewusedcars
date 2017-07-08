import React from 'react';
import Nav from './Nav';
import Advertisement from './Advertisement';
import Footer from './Footer';
import ReviewFeatures from './ReviewFeatures';

export default function Reviews() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="col-md-8">
          <div className="row">
            <div className="col-lg-12">
                <h3>Reviews</h3>
                <ReviewFeatures />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <Advertisement />
        </div>
      </div>
      <Footer />
    </div>
  );
}
