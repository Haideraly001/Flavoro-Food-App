import React from "react";
import "./App.css"; // Assuming you have some styles in App.css
import Header from "./components/Header";
import Foods from "./components/Foods";

const App = () => {
  return (
    <>
      <Header />
      <Foods />
    </>
  );
};

export default App;
