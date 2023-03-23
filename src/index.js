import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material';
// import { orange } from '@mui/material/colors';

import { NotificationContextProvider } from './context/notification-ctx';

import App from "./App";

// ==============================================

const theme = createTheme({
  palette: {
    primary: {
      main: "#CCC"
    },
    // secondary: {
    //   main: orange[500]
    // },
  }, // palette
});

// ==============================================

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <NotificationContextProvider>
        <App />
      </NotificationContextProvider>
    </ThemeProvider> 
  </StrictMode>
);
