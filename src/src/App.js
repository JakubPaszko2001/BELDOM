import React from "react";
import Main from "./components/firstPage/index.js"
import Second from "./components/secondPage/index.js"
import Third from "./components/thirdPage/index.js"
import Fourth from "./components/fourthPage/index.js"
import Fifth from "./components/fifthPage/index.js"
import './index.css'
function App() {
  return (
    <div className="App">
      <Main />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
    </div>
  );
}

export default App;
