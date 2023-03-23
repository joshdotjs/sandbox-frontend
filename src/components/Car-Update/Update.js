import { useState, useContext } from "react";
import { Button, Typography } from "@mui/material";

import NotificationContext from "context/notification-ctx";

import Form from "./Form";

import URL from "util/url";

// ==================================================

export default function UpdateCar({ setCars }) {
  // ---------------------------------------------

  const [input, setInput] = useState({
    id: null,
    name: "",
  });

  const { setNotification } = useContext(NotificationContext);

  // --------------------------------------------

  const updateCar = async () => {
    setNotification({ message: 'Sending request...', severity: 'info' });

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
      setNotification({ message: data?.message, severity: 'success' });
    } else {
      setNotification({ message: data?.message, severity: 'error' });
    }
  };

  // --------------------------------------------

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>Update Cars</Typography>

      <Form {...{ input, setInput }} />

      <Button color="warning" variant="contained" onClick={updateCar}>
        Update Car
      </Button>

      {/* <Notification {...{ notification, setNotification }} /> */}
    </>
  );
}

// ==================================================
