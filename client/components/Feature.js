import React from 'react';

export default function Feature(props) {
  return (
    <div className="col-md-3 col-sm-6 hero-feature">
        <div className="thumbnail">
            <img src="images/IMG_3051.JPG" alt="Vehicle Image" />
            <div className="caption">
                <h3>{props.title}</h3>
                <p>{props.tag}</p>
                <p>
                  <a href="#" className="btn btn-primary">Read Review</a>
                </p>
            </div>
        </div>
    </div>
  );
}
