import { useState } from "react";
import { Typography } from "@mui/material";

import GetCar from 'components/Car-Get-by-ID/Get-by-ID';
import GetCars from "components/Cars-Get/Get";
import CreateCar from "components/Car-Create/Create";
import UpdateCar from "components/Car-Update/Update";
import DeleteCar from "components/Car-Delete/Delete";
import Notification from "components/Notification";

import "./styles.css";

// ==================================================

const h1 = {
  fontSize: '3rem',
  mb: 2
};

// ==================================================

export default function App() {
  // --------------------------------------------

  const [cars, setCars] = useState([]);

  // --------------------------------------------

  return (
    <>
      <div className="App">
        <Typography variant="h1" sx={h1}>CRUD App</Typography>

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
