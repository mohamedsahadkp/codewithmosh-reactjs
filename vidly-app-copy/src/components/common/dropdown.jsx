import React from "react";

const Dropdown = ({ name, label, values, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select className="custom-select" id={name} onChange={onChange}>
        {values.map((value) => (
          <option key={value._id} value={value._id}>
            {value.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Dropdown;
