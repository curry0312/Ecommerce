import React from "react";

const Input = ({label, id, type, setFunc}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-xl font-roboto">
        {label}
      </label>
      <input
        id={id}
        onChange={(e) => setFunc(e.target.value)}
        type={type}
        className="border border-gray-400 rounded-lg p-2"
      />
    </div>
  );
};

export default Input;
