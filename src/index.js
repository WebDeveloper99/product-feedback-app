import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';

import Root from './root'
import { SuggestionsContextProvider } from './context/suggestion/SuggContext';

ReactDOM.render(
  <React.StrictMode>
    <SuggestionsContextProvider>
      <Router>
        <Root />
      </Router>
    </SuggestionsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
