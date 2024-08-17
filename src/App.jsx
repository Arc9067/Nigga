import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gen from "./components/Gen";

function App() {
  return (
    <div className="min-h-screen font-luckyCoin bg-[#2C5648] text-white relative">
      <Header />
      <Hero />
      <Gen />
    </div>
  );
}

export default App;
