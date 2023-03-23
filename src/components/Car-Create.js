import { useState } from "react";
import { Button } from "@mui/material";

import CarForm from "components/Car-Create-Form";

import URL from "util/url";

// ==================================================

export default function CreateCar({ setCars }) {
  // ---------------------------------------------

  // const [notification, setNotification] = useState("");

  const [input, setInput] = useState({
    name: "",
  });

  // --------------------------------------------

  const createCar = async () => {
    // setNotification(`Sending request...`);

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
    }
    
    // setNotification(data?.message);
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
