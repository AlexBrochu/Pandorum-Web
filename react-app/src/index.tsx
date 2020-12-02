
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import HelloWord from "./components/HelloWord";

const Index = () => {
  return <div>
      <App />
    </div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));