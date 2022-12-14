import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>Click Me!</button>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const element = <CustomButton/>;
root.render(element);
