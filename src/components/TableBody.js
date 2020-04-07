import React from "react";
import TableRow from "./TableRow";

function TableBody({ usersToDisplay }) {
  return (
    <tbody>
      {usersToDisplay[0] !== undefined &&
      usersToDisplay[0].name !== undefined ? (
        usersToDisplay.map(emp => (
          <TableRow
            key={emp.login.uuid}
            thumbnail={emp.picture.thumbnail}
            first={emp.name.first}
            last={emp.name.last}
            phone={emp.phone}
            email={emp.email}
          />
        ))
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default TableBody;
