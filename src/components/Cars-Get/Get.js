import { useContext } from "react";
import { Button, Typography } from "@mui/material";

import NotificationContext from "context/notification-ctx";

import CarsTable from "./Table";

import URL from "util/url";

// ==================================================

export default function GetCars({ cars, setCars }) {
  // --------------------------------------------

  const { setNotification } = useContext(NotificationContext);

  // --------------------------------------------

  const getAllCars = async () => {
    setNotification({ message: 'Sending request...', severity: 'info' });

    const url = `${URL}/cars`;

    const resp = await fetch(url);
    const data = await resp.json();
    console.log("data: ", data);

    if (resp.ok) {
      setCars(data?.cars);
      setNotification({ message: data?.message, severity: 'success' });
    } else {
      setNotification({ message: data?.message, severity: 'error' });
    }
  };

  // --------------------------------------------

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>Read Cars</Typography>

      <Button color="success" variant="contained" onClick={getAllCars}>
        Read Cars
      </Button>

      { cars.length > 0 && <CarsTable {...{ cars }} /> }
    </>
  );
}

// ==================================================
