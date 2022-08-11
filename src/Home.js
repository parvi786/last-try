import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <br />
      <a href="/about">About</a>
      <a href="/contact">contact</a>
    </>
  );
}

export default Home;
