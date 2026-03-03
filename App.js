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

//React functional component

const title = (
  <h1 id="title" className="title">
    Title of the Project
  </h1>
);

const Title = () => (
  <h3 id="heading" tabIndex={6} className="title">
    Another Title heading
  </h3>
);

const HeadingComponent = () => (
  <div id="container">
    {title}
    {Title()}
    <h2 id="heading" className="head">
      This is functional component
    </h2>
    <Title/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
