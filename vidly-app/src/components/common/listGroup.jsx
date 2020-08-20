import React, { Component } from "react";
import PropTypes from "prop-types";

const ListGroup = (props) => {
  const {
    items,
    onItemSelect,
    selectedItem,
    valueProperty,
    textProperty,
  } = props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => {
            onItemSelect(item);
          }}
          className={
            selectedItem === item._id
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name",
};

ListGroup.protoTypes = {
  items: PropTypes.array.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItemId: PropTypes.string.isRequired,
  valueProperty: PropTypes.string.isRequired,
  textProperty: PropTypes.string.isRequired,
};

export default ListGroup;
