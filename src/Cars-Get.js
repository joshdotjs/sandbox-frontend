import { useState } from "react";
import { Button } from "@mui/material";

import CarsTable from "./Cars-Table";
import Notification from "./Notification";

import URL from "./url";

// ==================================================

export default function GetCars({ cars, setCars }) {
  // --------------------------------------------

  const [notification, setNotification] = useState("");

  // --------------------------------------------

  const getAllCars = async () => {
    setNotification(`Sending request...`);

    const url = `${URL}/cars`;

    const resp = await fetch(url);
    const data = await resp.json();

    console.log("data: ", data);
    setNotification(data?.message);

    setCars(data?.cars);
  };

  // --------------------------------------------

  return (
    <>
      <h1>Read Cars</h1>

      <Button variant="contained" onClick={getAllCars}>
        Read Cars
      </Button>

      <CarsTable {...{ cars }} />

      <Notification {...{ notification, setNotification }} />
    </>
  );
}

// ==================================================
