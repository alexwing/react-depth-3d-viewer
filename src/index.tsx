import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory } from 'history';
import content from './content/content.json';
import { BrowserRouter as Router } from "react-router-dom";

export const history = createBrowserHistory({
//  basename: process.env.PUBLIC_URL
});


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App content={content} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

