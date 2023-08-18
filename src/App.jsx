import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Projects from "../src/pages/Projects";
import About from "../src/pages/About";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
