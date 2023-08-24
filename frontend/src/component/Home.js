import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <button className="link">
        <Link to="/register">New User? Register</Link>
      </button>
      <button className="link">
        <Link to="/login">Already a user? Login</Link>
      </button>
      <button className="link">
        <Link to="/admin">Admin</Link>
      </button>
    </div>
  );
};

export default Home;
