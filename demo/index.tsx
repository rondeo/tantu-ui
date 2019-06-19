import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style.scss';

import Router from './Router';

function App() {
  return (<Router />);
}


function init() {
  ReactDOM.render(<App />, document.getElementById('app'));
}


init();
