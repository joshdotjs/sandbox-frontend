import { useState } from "react";
import { Typography } from "@mui/material";

import GetCar from './Car-Get';
import GetCars from "./Cars-Get";
import CreateCar from "./Car-Create";
import UpdateCar from "./Car-Update";
import DeleteCar from "./Car-Delete";

import "./styles.css";

// ==================================================

export default function App() {
  // --------------------------------------------

  const [cars, setCars] = useState([]);

  // --------------------------------------------

  return (
    <div className="App">
      <Typography variant="h1">CRUD App</Typography>

      <hr />

      <GetCars {...{ cars, setCars }} />

      <hr />

      <CreateCar {...{ setCars }} />

      <hr />

      <GetCar />

      <hr />

      <UpdateCar {...{ setCars }} />

      <hr />

      <DeleteCar {...{ setCars }} />

    </div>
  );
}
