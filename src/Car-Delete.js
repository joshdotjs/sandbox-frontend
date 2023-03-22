import { useState } from "react";
import { Button } from "@mui/material";

import CarFormName from "./Car-Create-Form";
import CarFormNumber from "./Car-Get-Form";
import Notification from "./Notification";

import URL from "./url";

// ==================================================

export default function DeleteCar({ setCars }) {
  // ---------------------------------------------

  const [notification, setNotification] = useState("");

  const [input, setInput] = useState({
    id: null,
    name: "",
  });

  // --------------------------------------------

  const createCar = async () => {
    setNotification(`Sending request...`);

    const { id, name } = input;
    const url = `${URL}/cars/${id}`;

    const resp = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    const data = await resp.json();  
    console.log("data: ", data);

    if (resp.ok) {
      setCars(data?.cars);
    }
    
    setNotification(data?.message);
  };

  // --------------------------------------------

  return (
    <>
      <h1>Delete a Car</h1>

      <CarFormNumber {...{ input, setInput }} />

      <Button variant="contained" onClick={createCar}>
        Delete Car
      </Button>

      <Notification {...{ notification, setNotification }} />
    </>
  );
}

// ==================================================
