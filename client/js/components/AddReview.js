import React from 'react';
import Nav from './Nav';
import AddReviewForm from './AddReviewForm';
import Advertisement from './Advertisement';
import Footer from './Footer';

export default function AddReview() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="col-md-8">
          <div className="row">
            <p className="lead section-lead">Add Car Review</p>
            <p className="section-paragraph">Please fill out all the required fields</p>
            <AddReviewForm />
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
