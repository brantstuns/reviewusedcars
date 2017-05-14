import React from 'react';

export default function SearchBar() {
  return (
    <div className="col-lg-4 col-lg-offset-4">
      <form className="form-inline">
        <div className="form-group">
          <label className="sr-only" htmlFor="exampleInputAmount">Search By VIN</label>
          <div className="input-group">
            <div className="input-group-addon">🚘</div>
            <input type="text" className="form-control" id="exampleInputAmount" size="25" maxLength="17" placeholder="Enter a VIN" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
  );
};
