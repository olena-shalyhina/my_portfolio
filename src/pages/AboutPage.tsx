import { FC } from 'react';
import '../styles/AboutPage.scss';
import { Socials } from '../components/Socials';

export const AboutPage: FC = () => {
  return (
    <section className="about_section container-fluid d-flex flex-column flex-lg-row align-items-center justify-content-center text-info my-3 fs-5 gap-3">
      <div className="about_experiens d-flex flex-column align-items-center col-12 col-lg-6 p-3">
        <Socials />

        <div>
          <h3 className="p-3">EXPERIENS</h3>
          <ul className="h-75 text-start ">
            <li>
              Since April 2023 Front-end developer “YOUR PRICE BOOKING”
              Development of a service platform for booking hotels and daily
              rental of apartments, houses, rooms and hostels using
              JavaScript(ES6+), TypeScript, React, Redux, Axios, SASS, REST API,
              i18n, adaptive and cross-browser layout, Figma, Yarn and Git.
            </li>
            <hr />
            <li>2006 – 2020 Accountant СONCERN “LISGROUP”</li>
            <hr />
          </ul>
        </div>
      </div>
      <div className="col-12 col-lg-6 d-flex flex-column gap-3">
        <div className="about_languages d-flex flex-column justify-content-center align-items-center p-3 ">
          <h3>LANGUAGES</h3>
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
        <div className="about_education flex-column align-items-center  justify-content-center p-3">
          <h3>EDUCATION</h3>
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
