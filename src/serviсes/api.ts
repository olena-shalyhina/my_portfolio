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
import Coral from '../assets/Coral_2.png';
import ShipmentsCrud from '../assets/shipments-crud.jpg';
// import PriceCalculate from '../assets/price-calculate.png';
import PriceCalculate from '../assets/price_calculate.png';
import Weather from '../assets/weather.jpg';
import BookStore from '../assets/book-store.jpg';

export const icons = [react, redux, html, node, js, css, git, figma, wordpress];

export const skills = [
  'TYPESCRIPT',
  'REACT',
  'REACT NATIVE',
  'EXPО',
  'REACT NAVIGATION',
  'REDUX',
  'JAVASCRIPT (ES6+)',
  'HTML 5',
  'CSS 3',
  'REACT HOOK FORM',
  'AXIOS',
  'RESPONSIVE LAYOUT',
  'SASS/SCSS',
  'BOOTSTRAP 5',
  'MATERIAL UI',
  'NODE.JS',
  'GIT/GITHUB',
  'NPM',
  'PYTHON',
  'PHP',
  'WORDPRESS',
];

export const projects: IProject[] = [
  {
    name: 'Restaurant React',
    img: Coral,
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
    name: 'Price Calculate',
    img: PriceCalculate,
    skills: ['React', 'Redux', 'CSS', 'HTML', 'Chart.js', 'React Bootstrap'],
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
    name: 'Shipments Crud Page',
    img: ShipmentsCrud,
    skills: ['React', 'Redux', 'Redux Thunk', 'React Bootstrap', 'Axios'],
    linkPreview: 'https://olena-shalyhina.github.io/shipments_crud_page',
    linkGH: 'https://github.com/olena-shalyhina/shipments_crud_page',
  },
  {
    name: 'Bookstore',
    img: BookStore,
    skills: ['JS', 'HTML', 'CSS'],
    linkPreview: 'https://olena-shalyhina.github.io/book-store/',
    linkGH: 'https://github.com/olena-shalyhina/book-store',
  },
];
