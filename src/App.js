import { useState, useEffect } from "react";
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
      const resp = await fetch("https://9tycxr-4550.preview.csb.app/users");
      const users = await resp.json();
      console.log("users: ", users);
      setUsers(users);
    })();
  }, []);

  // --------------------------------------------

  const addUserHanlder = () => {
    alert("todo -");
  };

  // --------------------------------------------

  return (
    <div className="App">
      <h1>CRUD App</h1>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={addUserHanlder}>
          Get User
        </Button>
        <Button variant="contained" onClick={addUserHanlder}>
          Create User
        </Button>
      </Stack>

      <Users {...{ users }} />
    </div>
  );
}
