import "./App.css";
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home";
import AllArticles from "./Components/AllArticles";
import AllTopics from "./Components/AllTopics";
import NavBar from "./Components/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">DUCK DUCK NEWS</header>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/articles/" element={<AllArticles />} />
          <Route path="/articles/:topic" element={<AllArticles />} />
          <Route path="/topics" element={<AllTopics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
