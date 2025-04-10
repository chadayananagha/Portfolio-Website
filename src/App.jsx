import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../src/layout/MainLayout"; // MainLayout includes Header, Footer, etc.
import Main from "./components/Main"; // Your main page
import About from "./components/About"; // Your about page
import Projects from "./components/Projects"; // Your projects page (if needed)
// import Contact from "./components/Contact"; // Your contact page (if needed)

function App() {
  return (
    <Routes>
      {/* Apply MainLayout to all routes */}
      <Route path="/" element={<MainLayout />}>
        {/* Nested routes inside MainLayout */}
        <Route index element={<Main />} />{" "}
        {/* Default route when visiting "/" */}
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
