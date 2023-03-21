import { useState } from "react";
import { Button } from "@mui/material";

import CarForm from "./Car-Form";
import Notification from "./Notification";

import URL from "./url";

// ==================================================

export default function CreateCar({ setCars }) {
  // ---------------------------------------------

  const [notification, setNotification] = useState("");

  const [input, setInput] = useState({
    name: "",
  });

  // --------------------------------------------

  const createCar = async () => {
    setNotification(`Sending request...`);

    const url = `${URL}/cars`;

    // const resp = await fetch(url);
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: input.name }), // body data type must match "Content-Type" header
    });

    const data = await resp.json();

    console.log("data: ", data);
    setNotification(data?.message);

    setCars(data?.cars);
  };

  // --------------------------------------------

  return (
    <>
      <h1>Create a Car</h1>

      <CarForm {...{ input, setInput }} />

      <Button variant="contained" onClick={createCar}>
        Create a Car
      </Button>
    </>
  );
}

// ==================================================
