import React from 'react';
import Feature from './Feature';

export default function Features(props) {
  var features = [];
  var i = 0;
  while(i < props.count) {
    features.push(<Feature title={"1992 BMW 325i"} tag={"A timeless classic!"}/>);
    i++;
  }

  return (
     <div className="row text-center">
      {features}
      <div className="row text-center">
       <a href="#" className="btn btn-default">Load More</a>
      </div>
     </div>
  );
}
