import { useState, useContext } from "react";
import { Button } from "@mui/material";

import NotificationContext from "context/notification-ctx";

import CarForm from "components/Car-Get-Form";

import URL from "util/url";

// ==================================================

export default function GetCar() {
  // ---------------------------------------------

  const { setNotification } = useContext(NotificationContext);

  const [input, setInput] = useState({
    id: null,
  });

  const [car, setCar] = useState();

  // --------------------------------------------

  const getCar = async () => {
    setNotification({ message: 'Sending request...', severity: 'info' });

    const { id } = input;
    const url = `${URL}/cars/${id}`;

    const resp = await fetch(url);
    const data = await resp.json();
    console.log("data: ", data);

    if (resp.ok) {
      setCar(data);
      setNotification({ message: data?.message, severity: 'success' });
    } else {
      setNotification({ message: data?.message, severity: 'error' });
    }

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
    </>
  );
}

// ==================================================
