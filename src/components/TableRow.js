import React from "react";

function TableRow({ usersToDisplay }) {
  console.log(usersToDisplay[0]);
  //In the table I want to create a row for each employee that needs to be displayed.
  return (
    <tbody>
      {usersToDisplay.map(emp => (
        <tr>
          <td>{emp.thumbnail}</td>
          <td>{emp.first}</td>
          <td>{emp.last}</td>
          <td>{emp.phone}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableRow;
