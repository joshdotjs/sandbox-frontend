import { useState } from "react";
import { Button } from "@mui/material";

import CarForm from "./Car-Form";
import Notification from "./Notification";

import URL from "./url";

// ==================================================

export default function GetCar() {
  // ---------------------------------------------

  const [notification, setNotification] = useState("");

  const [input, setInput] = useState({
    name: "",
  });

  const [car, setCar] = useState();

  // --------------------------------------------

  const getCar = async () => {
    setNotification(`Sending request...`);

    const url = `${URL}/cars`;

    // const resp = await fetch(url);
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
        Get a Car
      </Button>

      <p>{ JSON.stringify(car) }</p>
    </>
  );
}

// ==================================================
