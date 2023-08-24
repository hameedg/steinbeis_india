import React, { useState } from "react";

const Access = ({ onAdmin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, password);
    if (name === "dev" && password === "dev@1234") {
      console.log("heo");
      onAdmin();
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
          placeholder="dev"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          className="input-field"
          type="password"
          value={password}
          placeholder="dev@1234"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="billo">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Access;
