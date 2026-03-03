import React from "react";
import ReactDOM from "react-dom/client";

//JSX is not part of React or not HTML indside REACT they are separate entity, JSX lookalike XML
//JSX -> HTML like or XML like syntax
//JSX transpiled before it reaches the JS as JS engine doesnot understand JSX.

const jsxHeading = (
  <h1 id="heading" className="root">
    Hi I am JSX heading
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
