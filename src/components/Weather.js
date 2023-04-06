import React from "react";
import Overview from "./Overview";
import Form from "./Form";
import Cast from "./Cast";

const weather = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <Form />
          <Overview />
          <Cast />
        </div>
      </div>
    </div>
  );
};

export default weather;
