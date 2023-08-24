import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ selected, onChange }) => {
  return (
    <DatePicker
      className="input-field"
      placeholderText="Select DOB"
      selected={selected}
      onChange={onChange}
      dateFormat="MM/dd/yyyy"
      id="datey"
    />
  );
};

export default CustomDatePicker;
