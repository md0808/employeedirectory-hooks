import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Table from "./Table";
import API from "../utils/API.js";

function DataArea() {
  const [users, setUsers] = useState([]);
  const [usersToDisplay, setUsersToDisplay] = useState(users);

  useEffect(() => {
    API.getUsers().then(res => setUsers(res.data.results));
  }, []);
  console.log(users);

  useEffect(() => {
    setUsersToDisplay(users);
  }, [users]);

  return (
    <div>
      <SearchBar />
      <Table usersToDisplay={usersToDisplay} />
    </div>
  );
}

export default DataArea;
