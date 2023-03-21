import { useState } from "react";
import { Button } from "@mui/material";

import Cars from "./Cars";
import Notification from "./Notification";

const URL = "https://9tycxr-4550.preview.csb.app/api";

// ==================================================

export default function GetCars() {
  // --------------------------------------------

  const [notification, setNotification] = useState("");
  const [cars, setCars] = useState([]);

  // --------------------------------------------

  const getAllCars = async () => {
    setNotification(`Sending request...`);

    const url = `${URL}/cars`;

    const resp = await fetch(url);
    const data = await resp.json();

    console.log("data: ", data);
    setNotification(`Response: ${data?.message}`);

    setCars(data?.cars);
  };

  // --------------------------------------------

  return (
    <>
      <h1>Get All Cars</h1>

      <Button variant="contained" onClick={getAllCars}>
        Get All Cars
      </Button>

      <Cars {...{ cars }} />

      <Notification {...{ notification, setNotification }} />
    </>
  );
}

// ==================================================
