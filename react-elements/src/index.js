import React from 'react';
import * as ReactDOM from 'react-dom';

const $h1 = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
);

console.log('$h1:', $h1);

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);
root.render($h1);
