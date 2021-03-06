import React from "react";
import "../styles/Components.css";

const TextField = ({ placeholder, label, type, value, onChange }) => {
  return (
    <div className="textFieldContainer custom">
      {label && (
        <label>
          <b>{label}</b>
        </label>
      )}
      <input
        value={value}
        type={type}
        className="textField"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
