import React from "react";
import TableBody from "./TableBody";

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
      <TableBody usersToDisplay={usersToDisplay} />
    </table>
  );
}

export default Table;
