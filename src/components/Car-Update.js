import { useState } from "react";
import { Button } from "@mui/material";

import CarFormName from "components/Car-Create-Form";
import CarFormNumber from "components/Car-Get-Form";
// import Notification from "./Notification";

import URL from "util/url";

// ==================================================

export default function UpdateCar({ setCars }) {
  // ---------------------------------------------

  // const [notification, setNotification] = useState("");

  const [input, setInput] = useState({
    id: null,
    name: "",
  });

  // --------------------------------------------

  const createCar = async () => {
    // setNotification(`Sending request...`);

    const { id, name } = input;
    const url = `${URL}/cars/${id}`;

    const resp = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }), // body data type must match "Content-Type" header
    });

    const data = await resp.json();  
    console.log("data: ", data);

    if (resp.ok) {
      setCars(data?.cars);
    }
    
    // setNotification(data?.message);
  };

  // --------------------------------------------

  return (
    <>
      <h1>Update a Car</h1>

      <CarFormName {...{ input, setInput }} />
      <CarFormNumber {...{ input, setInput }} />

      <Button variant="contained" onClick={createCar}>
        Update Car
      </Button>

      {/* <Notification {...{ notification, setNotification }} /> */}
    </>
  );
}

// ==================================================
