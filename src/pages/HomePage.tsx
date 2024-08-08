import { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import logo from '../assets/logo.jpg';
import '../styles/HomePage.scss';
import myPhoto from '../assets/my-photo.jpg';
import monitor from '../assets/monitor.jpg';

export const HomePage: FC = () => {
  return (
    <section className="home_section row text-info  mx-2">
      <div className="home_discription col-md-12 col-lg-3   d-flex flex-column align-items-center justify-content-around order-2 order-lg-1  border border-saccesful rounded  px-4 ">
        <img className="home_img my-3" src={myPhoto} alt="My photo" />

        <p>
          I have been seriously programming for more than 2 years and today I
          have almost a year of successful experience in developing a fairly
          large commercial project. In this project, I implemented a dark theme
          for the site, participated in setting up authentication and created a
          convenient and intuitive UI, adapted for tablet and mobile devices.
        </p>
      </div>
      <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center order-1 order-lg-2  gap-5 mt-4">
        <h1>OLENA SHALYHINA</h1>
        <h3>FRONT-END DEVELOPER</h3>
        <a href="#" target="_blank">
          <img src={logo} className="my_logo" alt="My logo" />
        </a>
      </div>
      <div className="home_discription col-md-12 col-lg-3 d-flex flex-column align-items-center  justify-content-around order-3 border border-saccesful rounded  px-4 ">
        <img className="home_img  my-3" src={monitor} alt="My photo" />
        <p>
          Able to work independently and coordinate with other team members and
          stakeholders to effectively complete assigned tasks. I have an
          excellent ability to quickly learn new skills and technologies. I am
          constantly developing and striving to become an exceptional specialist
          in the field of web development.
        </p>
      </div>
    </section>
  );
};
// rounded-circle
