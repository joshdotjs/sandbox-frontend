import { useState, createContext } from 'react';

// ==============================================

const INIT_NOTIFICATION = { message: "", severity: 'info' }; 

// ==============================================

const NotificationContext = createContext({
  state: null,
  setState: () => {},
  notification: INIT_NOTIFICATION,
  setNotification: () => {},
});

// ==============================================

const NotificationContextProvider = ({ children }) => {

  const [state, setState] = useState();

  const [notification, setNotification] = useState(INIT_NOTIFICATION);

  const resetNotification = () => setNotification(INIT_NOTIFICATION);

  const context = {
    state,
    setState,
    notification,
    setNotification,
    resetNotification,
  };

  return (
    <NotificationContext.Provider value={context}>{ children }</NotificationContext.Provider>
  );

};

// ==============================================

export default NotificationContext;
export { NotificationContextProvider };