import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cost, setCost] = useState("");
  const navigate = useNavigate();
  let user;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { name, quantity, cost });

    try {
      const response = await axios.post("api/v1/create", {
        name,
        quantity,
        cost,
      });
      if (response.status === 200) {
        user = {
          name: "dev",
        };
        console.log(user);
        navigate("/assets", { state: user });
      }
    } catch (error) {
      console.log("failed to create asset" + error);
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
          placeholder="Assetname"
          onChange={(e) => setName(e.target.value)}
        />

        <div className="age_dob">
          <input
            className="input-field"
            placeholder="Quantity"
            type="number"
            required
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <input
            className="input-field"
            placeholder="Cost of Each"
            type="number"
            required
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <button type="submit" className="billo">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin;
