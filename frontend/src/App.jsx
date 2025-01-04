import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

const App = () => {
  console.log(import.meta.env);

  return (
    <div className="overflow-x-hidden">
      <NavBar />

      <div>
        <Hero />
      </div>
    </div>
  );
};

export default App;
