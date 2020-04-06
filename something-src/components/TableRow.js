import React from "react";

function TableRow({ thumbnail, first, last, phone, email }) {
  return (
    <tr>
      <td>
        <img src={thumbnail} alt={`${first} ${last}`} />
      </td>
      <td>{first}</td>
      <td>{last}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  );
}

export default TableRow;
