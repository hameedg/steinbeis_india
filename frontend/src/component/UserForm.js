import React, { useState } from "react";
import DatePicker from "./DatePicker";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [dob, setDOB] = useState();
  const navigate = useNavigate();
  let user;

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { name, gender, age, dob });
    try {
      const response = await Axios.post(
        "api/v1/register",
        {
          name,
          age,
          gender,
          dob,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        user = response.data.user;
        console.log(user);
        console.log("navigating to assets");

        navigate("/assets", { state: user });
      }
    } catch (error) {
      console.log("failed registration");
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
        <div className="radio-group">
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            Gender:
          </div>
          <div className="gender">
            <div>
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
              />{" "}
              Male
            </div>
            <div>
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
              />{" "}
              Female
            </div>
            <div>
              {" "}
              <input
                type="radio"
                value="prefer_not_to_say"
                checked={gender === "prefer_not_to_say"}
                onChange={handleGenderChange}
              />{" "}
              Prefer not to say
            </div>
          </div>
        </div>
        <div className="age_dob">
          <input
            className="input-field"
            placeholder="Age"
            type="number"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <div className="input-field">
            <DatePicker
              className="date-picker"
              selected={dob}
              onChange={(date) => setDOB(date)}
            />
          </div>
        </div>
        <button type="submit" className="billo">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
