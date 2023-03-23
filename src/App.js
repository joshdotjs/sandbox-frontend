import { useState } from "react";
import { Typography } from "@mui/material";

import GetCar from 'components/Car-Get';
import GetCars from "components/Cars-Get/Cars-Get";
import CreateCar from "components/Car-Create";
import UpdateCar from "components/Car-Update";
import DeleteCar from "components/Car-Delete";
import Notification from "components/Notification";

import "./styles.css";

// ==================================================

export default function App() {
  // --------------------------------------------

  const [cars, setCars] = useState([]);

  // --------------------------------------------

  return (
    <>
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

      <Notification />
    </>
  );
}
