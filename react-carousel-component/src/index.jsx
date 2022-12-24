import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const images = [
  {
    src: '../images/001.png',
    alt: 'bulbasaur'
  },
  {
    src: '../images/004.png',
    alt: 'charmander'
  },
  {
    src: '../images/007.png',
    alt: 'squirtle'
  },
  {
    src: '../images/025.png',
    alt: 'pikachu'
  },
  {
    src: '../images/039.png',
    alt: 'jigglypuff'
  }
];

root.render(<Carousel images={images} />);
