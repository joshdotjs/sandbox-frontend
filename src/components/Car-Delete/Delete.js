import { useState, useContext } from "react";
import { Button, Typography } from "@mui/material";

import NotificationContext from "context/notification-ctx";

import Form from "./Form";

import URL from "util/url";

// ==================================================

export default function DeleteCar({ setCars }) {
  // ---------------------------------------------

  const [input, setInput] = useState({
    id: null,
    name: "",
  });

  const { setNotification } = useContext(NotificationContext);

  // --------------------------------------------

  const deleteCar = async () => {
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

      <Form {...{ input, setInput }} />

      <Button color="error" variant="contained" onClick={() => alert('coming soon!')}>
        Delete Car
      </Button>
    </>
  );
}

// ==================================================
