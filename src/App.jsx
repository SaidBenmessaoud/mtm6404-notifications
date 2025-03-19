import { useState } from 'react';
import './App.css';
import notificationsData from './notifications.js';

function App({ children }) {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="App container-fluid p-4">
      <h1 className="text-center">Notifications ({notifications.length})</h1>
      <div className="d-flex justify-content-center mb-3">
        <button onClick={clearAllNotifications} className="btn btn-danger">Clear All Notifications</button>
      </div>
      <div className='row'>
        {children}
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div className='col-12 mb-2' key={index}>
              <div className="row align-items-center p-2 border rounded shadow-sm bg-light">
                <span className='col-1 text-end fw-bold'>{notification.id}</span>
                <p className='col-2 text-center fw-semibold'>{notification.name}</p>
                <p className='col-6 message p-1'>{notification.message}</p>
                <button onClick={() => clearNotification(notification.id)} className="col-2 btn btn-warning">Clear</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No notifications available</p>
        )}
      </div>
    </div>
  );
}

export default App;
