import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import DataArea from "./components/DataArea";

function App() {
  return (
    <div className='App'>
      <Nav />

      <div className='container'>
        <DataArea />
      </div>
    </div>
  );
}

export default App;
