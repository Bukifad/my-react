import React from "react";
import Overview from "./Overview";
import Form from "./Form";
import Cast from "./Cast";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
};

export default weather;
