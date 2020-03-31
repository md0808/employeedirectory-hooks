// here i'm going to write a function that uses AJAX to to get info from the random user API

import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
