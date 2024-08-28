import { IProject } from '../types/types';
import css from '../assets/icons/css-3.svg';
import html from '../assets/icons/html-5.svg';
import js from '../assets/icons/js.svg';
import node from '../assets/icons/node-js.svg';
import git from '../assets/icons/git.svg';
import react from '../assets/icons/react.svg';
import redux from '../assets/icons/redux.svg';
import figma from '../assets/icons/figma.svg';
import wordpress from '../assets/icons/wordpress.svg';
import Starfish from '../assets/starfish.jpg';
import ShipmentsCrud from '../assets/shipments-crud.jpg';
import PriceCalculate from '../assets/price-calculate.jpg';
import Weather from '../assets/weather2.jpg';
import BookStore from '../assets/book-store.jpg';

export const icons = [react, redux, html, node, js, css, git, figma, wordpress];

export const skills = [
  'JAVASCRIPT (ES6+)',
  'TYPESCRIPT',
  'REACT',
  'REDUX',
  'HTML 5',
  'CSS 3',
  'SASS/SCSS',
  'BOOTSTRAP 5',
  'RESPONSIVE LAYOUT',
  'AXIOS',
  'REACT HOOK FORM',
  'CHART.JS',
  'GIT/GITHUB',
  'NPM',
  'YARN',
  'PHP',
  'WORDPRESS',
];

export const projects: IProject[] = [
  {
    name: 'Starfish Restaurant',
    img: Starfish,
    skills: [
      'Vite',
      'TypeScript',
      'React',
      'Redux Toolkit',
      'React Router',
      'React Hook Form',
      'React Bootstrap',
      'SASS',
    ],
    linkPreview: 'https://olena-shalyhina.github.io/online_restaurant_react/',
    linkGH: 'https://github.com/olena-shalyhina/online_restaurant_react',
  },
  {
    name: 'Shipments Crud Page',
    img: ShipmentsCrud,
    skills: ['React', 'Redux', 'Redux Thunk', 'React Bootstrap', 'Axios'],
    linkPreview: 'https://olena-shalyhina.github.io/shipments_crud_page',
    linkGH: 'https://github.com/olena-shalyhina/shipments_crud_page',
  },
  {
    name: 'Price Calculate',
    img: PriceCalculate,
    skills: ['React', 'Redux', 'Chart.js', 'React Bootstrap', 'HTML', 'CSS'],
    linkPreview: 'https://olena-shalyhina.github.io/price_calculator',
    linkGH: 'https://github.com/olena-shalyhina/price_calculator',
  },
  {
    name: 'Weather App',
    img: Weather,
    skills: ['React', 'Axios', 'HTML', 'CSS'],
    linkPreview: 'https://olena-shalyhina.github.io/weather-app/',
    linkGH: ' https://github.com/olena-shalyhina/weather-app',
  },
  {
    name: 'Bookstore',
    img: BookStore,
    skills: ['JS', 'HTML', 'CSS'],
    linkPreview: 'https://olena-shalyhina.github.io/book-store/',
    linkGH: 'https://github.com/olena-shalyhina/book-store',
  },
];
