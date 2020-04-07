import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Table from "./Table";
import API from "../utils/API.js";

function DataArea() {
  const [users, setUsers] = useState([]);
  const [usersToDisplay, setUsersToDisplay] = useState(users);
  const [order, setOrder] = useState("ascending");

  //This  gets all of the users from the API and loads  them into users state,
  useEffect(() => {
    API.getUsers().then(res => setUsers(res.data.results));
  }, []);
  console.log(users);

  //This watches users  and as soon as users is loaded it sets users to display to users

  useEffect(() => {
    setUsersToDisplay(users);
  }, [users]);

  //Takes in the searchBar event
  const userSearch = event => {
    console.log(event.target.value);
    // This is the thing we are filtering against
    const filter = event.target.value;
    //searchResults are anything that matches against the filtered value
    const searchedResults = users.filter(item => {
      //Object.value does what??
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    setUsersToDisplay({ usersToDisplay: searchedResults });
    // console.log(searchedResults);
  };

  return (
    <div>
      <SearchBar userSearch={userSearch} />
      <Table usersToDisplay={usersToDisplay} />
    </div>
  );
}

export default DataArea;
