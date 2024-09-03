import { FC } from 'react';
import English from '../assets/certificate-en.jpg';
import React from '../assets/certificate-react.jpg';
import '../styles/aboutPage.scss';

export const AboutPage: FC = () => {
  return (
    <section className="about_section d-flex flex-column align-items-center justify-content-center text-info mt-2 mb-3 fs-6 gap-4">
      <h2 className="text-uppercase">About me</h2>
      <div className="about_experiens d-flex flex-column align-items-center ">
        <h4 className="pt-3">EXPERIENCE</h4>
        <ul className="h-75 text-start">
          <li>
            Since April 2023 Front-end developer “YOUR PRICE BOOKING”
            Development of a service platform for booking hotels and daily
            rental of apartments, houses, rooms and hostels using
            JavaScript(ES6+), TypeScript, React, Redux, Axios, SASS, REST API,
            i18n, adaptive and cross-browser layout, Figma, Yarn and Git. In
            this project, I implemented a dark theme for the site, participated
            in setting up authentication and created a convenient and intuitive
            UI, adapted for tablet and mobile devices
          </li>
          <hr />
          <li>2006 – 2020 Accountant СONCERN “LISGROUP”</li>
        </ul>
      </div>
      <div className="d-flex flex-column flex-lg-row justify-content-center gap-4">
        <div className="about_education flex-column align-items-center  justify-content-center w-100 p-2 pt-3">
          <h4>EDUCATION</h4>
          <ul className="text-start">
            <li>
              Successfully completed the “Front-end web development with React”
              training arranged by Gamma Intelligence in Tallinn, Estonia
            </li>
            <hr />
            <li>
              Pavlohrad Сollege of the National Mining University Associate
              Degree, Engineering
            </li>
          </ul>
        </div>

        <div className="about_certificates w-100 py-3 pt-3">
          <h4 className="pb-2">СERTIFICATES</h4>
          <div className="d-flex justify-content-evenly">
            <a
              href="https://drive.google.com/file/d/1KkIfmW8q90h8c53Eu7JLyvoj3jL-aVmr/view?usp=drive_link"
              className="certificate py-3 p-lg-2"
            >
              <img
                src={English}
                alt="Сertificate English B1"
                width="120"
                height="190"
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1zJAMv47RtC5DCiFeMUfrsLCi1i22cy6X/view?usp=drive_link"
              className="certificate py-3 p-lg-2"
            >
              <img
                src={React}
                alt="Сertificate React"
                className="certificate"
                width="120"
                height="190"
              />
            </a>
          </div>
        </div>
        <div className="about_languages w-100 p-2 pt-3">
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
      </div>
    </section>
  );
};
