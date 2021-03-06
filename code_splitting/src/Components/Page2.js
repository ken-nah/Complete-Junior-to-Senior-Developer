import React from "react";
import logo from "../logo.svg";

const Page1 = ({ onRouteChange }) => {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <button onClick={() => onRouteChange("page1")}>
        Page 1
      </button>
      <button
        className="disabled"
        onClick={() => onRouteChange("page2")}
      >
        Page 2
      </button>
      <button onClick={() => onRouteChange("page3")}>
        Page 3
      </button>
    </div>
  );
};

export default Page1;
