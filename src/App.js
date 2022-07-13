import React from "react";
import Main from "./components/firstPage/index.js"
import Second from "./components/secondPage/index.js"
import Third from "./components/thirdPage/index.js"
import './index.css'
function App() {
  return (
    <div className="App">
      <Main />
      <Second />
      <Third />
    </div>
  );
}

export default App;
