import React from 'react';

export default function ReviewFeature() {
  return (
    <div className="col-md-6 col-sm-6 hero-feature">
      <div className="thumbnail">
          <img src="http://placehold.it/800x500" alt="" />
          <div className="caption">
              <h3>Feature Label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <p>
                <a href="#" className="btn btn-default">More Info</a>
              </p>
          </div>
      </div>
    </div>
  );
}
