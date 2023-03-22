import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import GetCar from './Car-Get';
import GetCars from "./Cars-Get";
import CreateCar from "./Car-Create";

import "./styles.css";

// ==================================================

export default function App() {
  // --------------------------------------------

  console.log(process.env);

  const [cars, setCars] = useState([]);

  // --------------------------------------------

  const comingSoon = () => alert("coming soon");

  // --------------------------------------------

  return (
    <div className="App">
      <h1>CRUD App</h1>

      <hr />

      <GetCars {...{ cars, setCars }} />

      <hr />

      <CreateCar {...{ setCars }} />

      <hr />

      <GetCar />

      <hr />

      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={comingSoon}>
          Delete Car
        </Button>

        <Button variant="contained" onClick={comingSoon}>
          Get Car by ID
        </Button>

        <Button variant="contained" onClick={comingSoon}>
          Update Car
        </Button>
      </Stack>
    </div>
  );
}
