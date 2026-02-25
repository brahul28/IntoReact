/**
 * <div id= "parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h1>I'm h1 tag</h1>
 *      </div>
 *  <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h1>I'm h1 tag</h1>
 *      </div>
 * </div>
 * 
 */
//How we can manually create the react elements.


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("div", { id: "one" }, "I am h1 Tag"),
    React.createElement("div", { id: "two" }, "I am h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("div", { id: "one" }, "I am h1 Tag"),
    React.createElement("div", { id: "two" }, "I am h2 Tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World Using React!",
);

console.log(heading); //Object
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
