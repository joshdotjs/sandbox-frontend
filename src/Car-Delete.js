import { useState } from "react";
import { Button, Typography } from "@mui/material";

import CarFormNumber from "./Car-Get-Form";
import Notification from "./Notification";

import URL from "./url";

// ==================================================

export default function DeleteCar({ setCars }) {
  // ---------------------------------------------

  const [notification, setNotification] = useState({
    message: "",
    severity: "",
  });

  const [input, setInput] = useState({
    id: null,
    name: "",
  });

  // --------------------------------------------

  const createCar = async () => {
    setNotification({ message: 'Sending request...', severity: 'info' });

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
      setNotification({ message: data?.message, severity: 'success' });
    } else {
      setNotification({ message: data?.message, severity: 'error' });
    }
  };

  // --------------------------------------------

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>Delete a Car</Typography>

      <CarFormNumber {...{ input, setInput }} />

      <Button color="secondary" variant="contained" onClick={createCar}>
        Delete Car
      </Button>

      <Notification {...{ notification, setNotification }} />
    </>
  );
}

// ==================================================
