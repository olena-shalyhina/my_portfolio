import { FC } from 'react';
import logo from '../assets/SH.jpg';
import myPhoto from '../assets/my-photo.jpg';
import '../styles/homePage.scss';

export const HomePage: FC = () => {
  const url = import.meta.env.BASE_URL;
  return (
    <section className='home_section row text-secondary d-flex align-items-center justify-content-center gap-5 my-3'>
      <div className='col-md-12 col-lg-7 d-flex flex-column justify-content-start align-items-center gap-2 gap-xxl-4 padding px-lg-3 '>
        <a href={`${url}contacts`}>
          <img
            src={logo}
            className='my_logo '
            alt='My logo'
            width='100'
            height='auto'
          />
        </a>
        <div className='d-flex gap-4 align-items-center justify-content-center'>
          <div>
            <h4 className='text-secondary fs-3'>Welcome! I’m </h4>
            <h2 className='text-accent fs-3'>
              Frontend & React Native Engineer
            </h2>
          </div>
        </div>

        <p className='text-light bg-info p-3 p-xxl-4 home_description rounded-4'>
          I have commercial experience in building modern mobile and web
          interfaces. I work with React, React Native, TypeScript, Redux
          Toolkit, React Navigation and Expo, creating clean, responsive and
          user‑friendly UI based on design systems and component‑driven
          architecture.
          <hr className='text-secondary' />
          In my recent commercial projects, I developed adaptive layouts,
          implemented theming, improved navigation flows, integrated REST APIs,
          and contributed to reusable UI components. I focus on code quality,
          stability, and delivering consistent user experience across devices.
          <hr className='text-secondary' />I work confidently both independently
          and in a team, communicate clearly, and quickly learn new tools and
          technologies. I am committed to continuous growth as a frontend and
          mobile engineer and enjoy building interfaces that feel smooth,
          intuitive and modern.
        </p>
      </div>
      <div className='col-md-12 col-lg-4 d-flex align-items-center justify-content-center  '>
        <img
          className='home_img'
          src={myPhoto}
          alt='My photo'
          width='350'
          height='400'
        />
      </div>
    </section>
  );
};
