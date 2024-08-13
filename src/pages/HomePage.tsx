import { FC } from 'react';
import logo from '../assets/logo.jpg';
import '../styles/HomePage.scss';
import myPhoto from '../assets/my-photo.jpg';
import monitor from '../assets/monitor.jpg';

export const HomePage: FC = () => {
  return (
    <section className="home_section row text-info mt-4 mx-1">
      <div className="home_discription col-md-12 col-lg-3 d-flex flex-column flex-md-row flex-lg-column  align-items-center justify-content-around order-2 order-lg-1 px-1 ">
        <img
          className="home_img m-3"
          src={myPhoto}
          alt="My photo"
          width="200"
          height="255"
        />

        <p className="p-3">
          I have been seriously programming for more than 2 years and today I
          have almost a year of successful experience in developing a fairly
          large commercial project. In this project, I implemented a dark theme
          for the site, participated in setting up authentication and created a
          convenient and intuitive UI, adapted for tablet and mobile devices.
        </p>
      </div>
      <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-center order-1 order-lg-2 mb-5 gap-4">
        <h1>
          <span className="text-saccesful">Hi! I`m </span>
          <br />
          OLENA SHALYHINA
        </h1>

        <h2>
          <span className="text-saccesful">JUNIOR</span>
          <br />
          FRONT-END DEVELOPER
        </h2>

        <a className="logo_container" href="" target="_blank">
          <img src={logo} className="my_logo" alt="My logo" />
        </a>
      </div>
      <div className="home_discription col-md-12 col-lg-3 d-flex  flex-column flex-md-row flex-lg-column align-items-center  justify-content-around order-3  px-1 ">
        <p className="p-3">
          Able to work independently and coordinate with other team members and
          stakeholders to effectively complete assigned tasks. I have an
          excellent ability to quickly learn new skills and technologies. I am
          constantly developing and striving to become an exceptional specialist
          in the field of web development.
        </p>
        <img
          className="home_img  m-3"
          src={monitor}
          alt="My photo"
          width="200"
          height="255"
        />
      </div>
    </section>
  );
};
// rounded-circle
