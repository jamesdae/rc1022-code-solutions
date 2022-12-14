import React from 'react';
import ReactDOM from 'react-dom/client';

const element = <h1>Hello, JSX!</h1>;

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
