import React, { Fragment } from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route
          exact
          path="/about"
          element={
            <Fragment>
              <About /> <Contact />
            </Fragment>
          }
        />

        <Route
          exact
          path="/contact"
          element={
            <Fragment>
              <Contact />
              <About />
            </Fragment>
          }
        />
      </Routes>
    </>
  );
}

export default App;
