import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import './css/tailwind.css';
import {AppContextProvider} from "./AppContext";

import './firebase';
import Notifications from "react-notify-toast";

ReactDOM.render(
  <React.StrictMode>
      <AppContextProvider>
          <Notifications />
          <App />
      </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
