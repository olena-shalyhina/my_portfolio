import { FC } from 'react';
import logo from '../assets/logo3.jpg';
import myPhoto from '../assets/my-photo.jpg';
import '../styles/HomePage.scss';

export const HomePage: FC = () => {
  return (
    <section className="home_section row text-info mt-4 mx-1">
      <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-center mb-4 gap-4 gap-lg-3">
        <h1>
          <span className="text-success">Hi! I`m </span>
          <br />
          OLENA SHALYHINA
        </h1>
        <h4 className="fs-3">result-oriented and motivated</h4>
        <h2>
          <span className="text-success fs-4">JUNIOR</span>
          <br />
          FRONT-END DEVELOPER
        </h2>
        <a className="logo_container" href="/contacts">
          <img src={logo} className="my_logo" alt="My logo" />
        </a>
      </div>
      <div className="home_discription col-md-12 col-lg-6 d-flex flex-column flex-md-row flex-lg-column  align-items-center justify-content-center mb-3 p-4 gap-3">
        <img
          className="home_img"
          src={myPhoto}
          alt="My photo"
          width="200"
          height="255"
        />
        <p className="px-3 mb-0">
          I have been actively programming for over two years and have almost a
          year of experience working on a large commercial project.
          <br />
          In this role, I implemented the dark theme, participated in setting up
          authentication, and developed a user-friendly user interface that
          flexibly responds to different devices.
          <br />
          I thrive on working independently, collaborating effectively with team
          members and stakeholders.
          <br />I have a strong ability to quickly learn new skills and
          technologies, and am committed to continuous development to become a
          leading web development professional.
        </p>
      </div>
    </section>
  );
};
