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
      // message={notification}
      autoHideDuration={1.5e3}
      open={!!notification.message}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={notification.severity} sx={{ width: "100%" }}>
        {notification.message}
      </Alert>
    </Snackbar>
  );
}
