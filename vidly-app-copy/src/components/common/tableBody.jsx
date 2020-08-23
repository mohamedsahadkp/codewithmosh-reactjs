import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderTableColumn = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  render() {
    const { data, dataKeyProprety, columns, columnKeyProperty } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item[dataKeyProprety]}>
            {columns.map((column) => (
              <td key={item[dataKeyProprety] + column[columnKeyProperty]}>
                {this.renderTableColumn(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.defaultProps = {
  dataKeyProprety: "_id",
  columnKeyProperty: "path",
};

export default TableBody;
