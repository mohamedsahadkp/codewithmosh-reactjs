import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const { sortedColum, onSort } = this.props;
    if (sortedColum.path === path) {
      sortedColum.order = sortedColum.order === "asc" ? "desc" : "asc";
    } else {
      sortedColum.order = "asc";
      sortedColum.path = path;
    }
    onSort(sortedColum);
  };

  renderSortIcon = (column) => {
    const { sortedColum } = this.props;
    if (column.path !== sortedColum.path) {
      return <i className="fa fa-sort"></i>;
    } else {
      if (sortedColum.order === "asc")
        return <i className="fa fa-sort-asc"></i>;
      else return <i className="fa fa-sort-desc"></i>;
    }
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => {
                this.raiseSort(column.path);
              }}
            >
              {column.label} {column.label ? this.renderSortIcon(column) : ""}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
