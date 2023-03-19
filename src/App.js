import { useState, useEffect } from "react";
// import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Users from "./Users";
import Form from "./Form";
import Notification from "./Notification";

import "./styles.css";

const URL = "https://9tycxr-4550.preview.csb.app/api";

// ==================================================

export default function App() {
  const [users, setUsers] = useState([]);

  const [notification, setNotification] = useState("");

  // --------------------------------------------

  // useEffect(() => {
  //   (async () => {
  //     const resp = await fetch(`${URL}/users`);
  //     console.log("resp: ", resp);
  //     const data = await resp.json();
  //     // const data = await axios.get("https://9tycxr-4550.preview.csb.app/users");
  //     console.log("data: ", data);

  //     if (data) {
  //       console.log("data: ", data);
  //       setUsers(data);
  //     }

  //     //  --1. Add form for data to create user
  //     // 2. POST request to endpoint to create new user
  //     // 3. Endpoint to store new user in DB
  //     // 4. Send response for success / error
  //     // 5. Handle response with appropriate error-handling on frontend
  //     // 6. Need notification system to display errors
  //     //    -https://mui.com/material-ui/react-snackbar
  //   })();
  // }, []);

  // --------------------------------------------

  const [input, setInput] = useState({
    name: "",
  });

  // --------------------------------------------

  const addUserHandler = async () => {
    setNotification(`Sending request...`);

    const url = `${URL}/users`;

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ josh: "josh" }), // body data type must match "Content-Type" header
    });
    const data = await resp.json(); // parses JSON response into native JavaScript objects

    console.log("data: ", data);
    setNotification(`Response: ${data?.message}`);
  };

  // --------------------------------------------

  const comingSoon = () => alert("coming soon");

  // --------------------------------------------

  const [cars, setCars] = useState([]);

  const getAllCars = async () => {
    setNotification(`Sending request...`);

    const url = `${URL}/cars`;

    const resp = await fetch(url);
    const data = await resp.json();

    console.log("data: ", data);
    setNotification(`Response: ${data?.message}`);

    setCars(data?.cars);
  };

  // --------------------------------------------

  return (
    <div className="App">
      <h1>CRUD App</h1>

      <Users {...{ users }} />

      <h1>Create / Delete Car</h1>
      <Form {...{ input, setInput }} />

      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={comingSoon}>
          Delete Car
        </Button>

        <Button variant="contained" onClick={comingSoon}>
          Get Car by ID
        </Button>

        <Button variant="contained" onClick={getAllCars}>
          Get All Cars
        </Button>

        <Button variant="contained" onClick={comingSoon}>
          Create Car
        </Button>

        <Button variant="contained" onClick={comingSoon}>
          Update Car
        </Button>
      </Stack>

      <p>{JSON.stringify(cars)}</p>

      <Notification {...{ notification, setNotification }} />
    </div>
  );
}
