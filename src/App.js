import { useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Users from "./Users";

import "./styles.css";

// ==================================================

export default function App() {
  const [users, setUsers] = useState([]);

  // --------------------------------------------

  useEffect(() => {
    (async () => {
      // const resp = await fetch("https://9tycxr-4550.preview.csb.app/users");
      // const users = await resp.json();
      const { data: users } = await axios.get(
        "https://9tycxr-4550.preview.csb.app/users"
      );

      console.log("users: ", users);
      setUsers(users);

      // 0. Add axios
      // 1. Add form for data to create user
      // 2. POST request to endpoint to create new user
      // 3. Endpoint to store new user in DB
      // 4. Send response for success / error
      // 5. Handle response with appropriate error-handling on frontend
      // 6. Need notification system to display errors
      //    -https://mui.com/material-ui/react-snackbar
    })();
  }, []);

  // --------------------------------------------

  const addUserHandler = () => {
    alert("todo -");
  };

  // --------------------------------------------

  return (
    <div className="App">
      <h1>CRUD App</h1>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={addUserHandler}>
          Delete User
        </Button>
        <Button variant="contained" onClick={addUserHandler}>
          Create User
        </Button>
      </Stack>

      <Users {...{ users }} />
    </div>
  );
}
