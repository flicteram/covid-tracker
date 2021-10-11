import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ContextProvider} from './Components/Context/Context'
import {HashRouter as Router} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

ReactDOM.render(
  <ContextProvider>
    <Router>
      <ScrollToTop/>
      <App/>
    </Router>
  </ContextProvider>,
  document.getElementById('root')
);


