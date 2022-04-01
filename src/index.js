import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';

import Root from './root'
import { GlobalContextProvider } from './context/globalContext'

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Router>
        <Root />
      </Router>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
