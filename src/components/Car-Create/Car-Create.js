import { useState, useContext } from "react";
import { Button } from "@mui/material";

import NotificationContext from "context/notification-ctx";

import CarForm from "components/Car-Create/Car-Create-Form";

import URL from "util/url";

// ==================================================

export default function CreateCar({ setCars }) {
  // ---------------------------------------------

  // const [notification, setNotification] = useState("");

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
      <h1>Create a Car</h1>

      <CarForm {...{ input, setInput }} />

      <Button variant="contained" onClick={createCar}>
        Create Car
      </Button>
    </>
  );
}

// ==================================================
