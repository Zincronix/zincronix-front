import React from "react";

const TextInput = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
