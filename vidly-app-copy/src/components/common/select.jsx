import React from "react";

const Select = ({ name, label, selectedItemId, values, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select className="custom-select" id={name} onChange={onChange}>
        <option key="" value=""></option>
        {values.map((value) => (
          <option
            key={value._id}
            selected={selectedItemId === value._id ? true : false}
            value={value._id}
          >
            {value.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
