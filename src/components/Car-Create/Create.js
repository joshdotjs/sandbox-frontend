import { useState, useContext } from "react";
import { Button, Typography } from "@mui/material";

import NotificationContext from "context/notification-ctx";

import Form from "./Form";

import URL from "util/url";

// ==================================================

export default function CreateCar({ setCars }) {
  // ---------------------------------------------

  const [input, setInput] = useState({
    name: "",
  });

  const { setNotification } = useContext(NotificationContext);

  // --------------------------------------------

  const createCar = async () => {
    setNotification({ message: 'Sending request...', severity: 'info' });

    const url = `${URL}/cars`;

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: input.name }), // body data type must match "Content-Type" header
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
      <Typography variant="h4" sx={{ mb: 2 }}>Create a New Car</Typography>

      <Form {...{ input, setInput }} />

      <Button color="secondary" variant="contained" onClick={() => alert('coming soon!')}>
        Create Car
      </Button>
    </>
  );
}

// ==================================================
