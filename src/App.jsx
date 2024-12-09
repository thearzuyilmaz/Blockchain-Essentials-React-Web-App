import Header from "./components/Header/Header"; // component
import Examples from "./components/Examples"; // feature
import CoreConcepts from "./components/CoreConcepts"; // feature
import React from "react";
import "./index.css";


function App() {

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
