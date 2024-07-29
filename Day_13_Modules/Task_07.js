// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

import axios from "axios";


axios
  .get("https://fakestoreapi.com/products")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });