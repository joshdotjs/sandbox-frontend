import { useContext } from "react";
import { Snackbar, Alert } from "@mui/material";

import NotificationContext from "../context/notification-ctx";

// ==================================================

export default function Notification() {
  // ----------------------------------------------

  const { notification, setNotification } = useContext(NotificationContext);

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
