import React from "react";

import TableHead from "./tableHead";
import TableBody from "./tableBody";

const Table = ({ columns, data, sortedColum, onSort }) => {
  return (
    <table className="table">
      <TableHead
        columns={columns}
        onSort={onSort}
        sortedColum={sortedColum}
      ></TableHead>
      <TableBody data={data} columns={columns}></TableBody>
    </table>
  );
};

export default Table;
