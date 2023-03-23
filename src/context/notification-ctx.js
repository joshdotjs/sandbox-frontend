import { useState, createContext } from 'react';

// ==============================================

const NotificationContext = createContext({
  state: null,
  setState: () => {},
  notification: { message: null, severity: null },
  setNotification: () => {},
});

// ==============================================

const NotificationContextProvider = ({ children }) => {

  const [state, setState] = useState();

  const [notification, setNotification] = useState({
    message: null,
    severity: "info",
  });


  const context = {
    state,
    setState,
    notification,
    setNotification,
  };

  return (
    <NotificationContext.Provider value={context}>{ children }</NotificationContext.Provider>
  );

};

// ==============================================

export default NotificationContext;
export { NotificationContextProvider };