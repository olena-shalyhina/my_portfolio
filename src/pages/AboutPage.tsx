import { FC } from 'react';
import '../styles/AboutPage.scss';

export const AboutPage: FC = () => {
  return (
    <section className="about_section d-flex flex-column align-items-center text-info my-3 my-lg-5 fs-6 gap-4">
      <div className="about_experiens d-flex flex-column align-items-center p-3">
        <h4 className="p-2">EXPERIENS</h4>
        <ul className="h-75 text-start">
          <li>
            Since April 2023 Front-end developer “YOUR PRICE BOOKING”
            Development of a service platform for booking hotels and daily
            rental of apartments, houses, rooms and hostels using
            JavaScript(ES6+), TypeScript, React, Redux, Axios, SASS, REST API,
            i18n, adaptive and cross-browser layout, Figma, Yarn and Git.
          </li>
          <hr />
          <li>2006 – 2020 Accountant СONCERN “LISGROUP”</li>
        </ul>
      </div>
      <div className="d-flex flex-column flex-lg-row justify-content-center gap-4">
        <div className="about_languages  w-100 w-lg-50 p-3">
          <h4>LANGUAGES</h4>
          <ul>
            <li>Ukrainian (С2)</li>
            <hr />
            <li>English (B1 Intermediate)</li>
            <hr />
            <li>Estonian (А1)</li>
            <hr />
            <li>Russian (С2)</li>
          </ul>
        </div>
        <div className="about_education flex-column align-items-center  justify-content-center w-100  w-lg-50 p-3">
          <h4>EDUCATION</h4>
          <ul className="text-start">
            <li>
              Successfully completed the “Front-end web development with React”
              training arranged by Gamma Intelligence in Tallinn, Estonia
            </li>
            <hr />
            <li>
              Pavlograd Сollege of the National Mining University Associate
              Degree, Engineering
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
