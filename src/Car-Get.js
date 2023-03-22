import { useState } from "react";
import { Button } from "@mui/material";

import CarForm from "./Car-Get-Form";
import Notification from "./Notification";

import URL from "./url";

// ==================================================

export default function GetCar() {
  // ---------------------------------------------

  const [notification, setNotification] = useState("");

  const [input, setInput] = useState({
    id: null,
  });

  const [car, setCar] = useState();

  // --------------------------------------------

  const getCar = async () => {
    setNotification(`Sending request...`);

    const { id } = input;
    const url = `${URL}/cars/${id}`;

    const resp = await fetch(url);
    const data = await resp.json();

    console.log("data: ", data);
    setNotification(data?.message);

    // setCar(data?.cars);
    setCar(data);
  };

  // --------------------------------------------

  return (
    <>
      <h1>Get a Car</h1>

      <CarForm {...{ input, setInput }} />

      <Button variant="contained" onClick={getCar}>
        Get Car
      </Button>

      <p>{ JSON.stringify(car) }</p>

      <Notification {...{ notification, setNotification }} />
    </>
  );
}

// ==================================================
