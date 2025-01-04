import React from "react";
import NavBar from "./components/NavBar";

const App = () => {
  console.log(import.meta.env);

  return (
    <div className="overflow-x-hidden">
      <NavBar />
    </div>
  );
};

export default App;
