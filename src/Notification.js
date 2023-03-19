import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

// ==================================================

export default function Notification({ notification, setNotification }) {
  // ----------------------------------------------
  // ----------------------------------------------

  const handleClose = (event, reason) => {
    // event?: React.SyntheticEvent
    // reason?: string
    if (reason === "clickaway") return;
    setNotification("");
  };

  // ----------------------------------------------

  return (
    <Snackbar
      sx={{ mb: 4 }}
      message={notification}
      autoHideDuration={3e3}
      open={!!notification}
      onClose={handleClose}
    >
      {/* <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        This is a success message!
      </Alert> */}
    </Snackbar>
  );
}
