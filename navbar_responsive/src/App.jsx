import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={Home} />
            <Route path="/about" element={About} />
            <Route path="/blog" element={Blog} />
            <Route path="/contact" element={Contact} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
