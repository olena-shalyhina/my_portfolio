import { FC } from 'react';
import myPhoto from '../assets/images/my_photo.jpeg';
// import myPhoto from '../assets/images/my-photo.webp';
import '../styles/HomePage.scss';

export const HomePage: FC = () => {
  const url = import.meta.env.BASE_URL;
  return (
    <section className='home_section container py-4 py-lg-5'>
      <div className='row align-items-center g-5'>
        <div className='col-12 col-sm-8 col-lg-4 mx-auto d-flex align-items-center justify-content-center'>
          <img
            className='home_img'
            src={myPhoto}
            alt='My photo'
            loading='eager'
          />
        </div>
        <div className='col-12 col-lg-7 offset-lg-1 text-start'>
          {/* <p className='text-secondary fs-3 fw-semibold mb-3'>
            <span className='me-2' aria-hidden='true'>●</span>Welcome! I’m
          </p> */}
          <h1 className='display-3 fw-bold text-light lh-1 mb-4'>
            Frontend &amp; <span className='text-primary'>Mobile Software</span>{' '}
            Engineer
          </h1>
          <p className='lead text-light lh-lg mb-4'>
            I build <strong>modern web and mobile applications</strong> with
            React, React Native, and TypeScript — combining clean code,
            thoughtful UX, and consistent design systems.
          </p>
          <div className='d-flex flex-wrap gap-3 mb-4'>
            <a
              className='btn btn-outline-accent btn-lg'
              href={`${url}projects`}
            >
              Explore my work
            </a>
            <a
              className='btn btn-outline-accent btn-lg'
              href={`${url}contacts`}
            >
              Let’s talk
            </a>
          </div>
          <ul className='list-unstyled d-flex flex-wrap gap-2 gap-lg-3 mb-4'>
            <li>
              <span className='badge rounded-pill bg-transparent border border-primary text-primary fs-6 p-3'>
                Commercial experience
              </span>
            </li>
            <li>
              <span className='badge rounded-pill bg-transparent border border-primary text-primary fs-6 p-3'>
                Reusable UI architecture
              </span>
            </li>
            <li>
              <span className='badge rounded-pill bg-transparent border border-primary text-primary fs-6 p-3'>
                Continuous growth
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
