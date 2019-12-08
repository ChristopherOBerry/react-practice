import React from "react";
import "./App.css";
import "./components/FirstComponent";
import FirstComponent from "./components/FirstComponent";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Babby's First React App</h1>
        <p>Stuff</p>
      </div>
      <FirstComponent />
    </div>
  );
}

export default App;
