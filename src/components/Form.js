import React from "react";

function Form() {
  return (
    <div>
      <form className="search-input">
        <div className="row">
          <div className="col-9">
            <input
              className="form-control,text-input"
              type="text"
              placeholder="enter city..."
              // w-300
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary">search</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
