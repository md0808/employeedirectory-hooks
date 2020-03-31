import React from "react";
import TableRow from "./TableRow";

function Table({ usersToDisplay }) {
  return (
    <table className='striped responsive'>
      <thead>
        <tr>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <TableRow usersToDisplay={usersToDisplay} />
    </table>
  );
}

export default Table;
