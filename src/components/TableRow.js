import React from "react";

function TableRow({ usersToDisplay }) {
  console.log(usersToDisplay[0]);
  //In the table I want to create a row for each employee that needs to be displayed.

  return (
    <tbody>
      {usersToDisplay.map(emp => (
        <tr>
          <td>
            <img
              src={emp.picture.thumbnail}
              alt={`${emp.name.first} ${emp.name.last}`}
            />
          </td>
          <td>{emp.name.first}</td>
          <td>{emp.name.last}</td>
          <td>{emp.phone}</td>
          <td>{emp.email}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableRow;
