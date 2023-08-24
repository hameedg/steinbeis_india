import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  let user;
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { name });
    try {
      const response = await axios.post("api/v1/login", {
        name,
      });
      if (response.status === 200) {
        console.log(response.data);
        user = response.data.user;
        console.log(user);
        navigate("/assets", { state: user });
      }
    } catch (error) {
      console.log("login failed" + error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          required
          className="input-field"
          type="text"
          value={name}
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit" className="billo">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
