import "./App.css";
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home";
import NavBar from "./Components/Nav";
import AllArticles from "./Components/AllArticles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/articles" element={<AllArticles />} />
      </Routes>
      <div className="App">
        <header className="App-header">DUCK DUCK NEWS</header>
      </div>
      <div>
        <NavBar />
        <HomePage />
      </div>
    </BrowserRouter>
  );
}

export default App;
