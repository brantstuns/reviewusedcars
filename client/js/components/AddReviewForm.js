import React from 'react';
import Nav from './Nav';
import Section from './Section';

export default function AddReviewForm() {
  return (
    <div>
      <form className="form-horizontal">
        <div className="form-group">

          <div className="input-group">
            <span className="input-group-addon" id="year-addon1">Year</span>
              <select className="form-control">
                <option>1990</option>
                <option>1991</option>
                <option>1992</option>
                <option>1993</option>
                <option>1994</option>
              </select>
          </div>
          <div className="input-group">
            <span className="input-group-addon" id="make-addon2">Make</span>
              <select className="form-control">
                <option>BMW</option>
                <option>Porsche</option>
                <option>Audi</option>
                <option>4</option>
                <option>5</option>
              </select>
          </div>
          <div className="input-group">
            <span className="input-group-addon" id="model-addon2">Model</span>
              <select className="form-control">
                <option>325i</option>
                <option>M3</option>
                <option>M2</option>
                <option>Cayman</option>
                <option>Blah</option>
              </select>
          </div>
          <div className="input-group">
            <span className="input-group-addon" id="vin-addon3">VIN</span>
            <input type="text" className="form-control" placeholder="Vehicle Identification Number" aria-describedby="vin-addon3" />
          </div>
          <div className="input-group">
            <span className="input-group-addon" id="color-addon4">Color</span>
            <input type="text" className="form-control" placeholder="Color" aria-describedby="color-addon4" />
          </div>
          <div className="input-group">
            <span className="input-group-addon" id="title-addon5">Title Status</span>
            <input type="text" className="form-control" placeholder="Title Status" aria-describedby="title-addon5" />
          </div>
          <div className="input-group">
            <span className="input-group-addon" id="odometer-addon6">Odometer</span>
            <input type="text" className="form-control" placeholder="Odometer Mileage" aria-describedby="odometer-addon6" />
          </div>
          <div className="input-group">
            <span className="input-group-addon" id="listing-addon7">Listing URL</span>
            <input type="text" className="form-control" placeholder="Lisitng URL" aria-describedby="listing-addon7" />
          </div>

        </div>
      </form>
    </div>
  );
}
