import React from "react";
import NavBar from "./components/NavBar";

const App = () => {
  console.log(import.meta.env);

  return (
    <div className="overflow-x-hidden">
      {/* Access the environment variable correctly */}
      <div>{import.meta.env.VITE_CAR}</div>

      <NavBar />
    </div>
  );
};

export default App;
