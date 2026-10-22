import { FC } from 'react';
import { Link } from 'react-router-dom';
import myPhoto from '../assets/images/my-photo-optimized.webp';
import '../styles/HomePage.scss';

const badges = [
  'Commercial experience',
  'Reusable UI architecture',
  'Continuous growth',
];

export const HomePage: FC = () => {
  return (
    <section className='home_section container pb-4 pb-lg-5'>
      <div className='row align-items-center g-5'>
        <div className='col-12 col-sm-8 col-lg-4 mx-auto d-flex align-items-center justify-content-center'>
          <img
            className='home_img'
            src={myPhoto}
            alt='My photo'
            width={817}
            height={1100}
            loading='eager'
            {...{ fetchpriority: 'high' }}
            decoding='async'
          />
        </div>
        <div className='col-12 col-lg-7 offset-lg-1 text-start'>
          <p className='text-secondary fs-3 fw-semibold mb-3'>Welcome! I’m</p>
          <h1 className='page_title display-3 fw-bold text-light lh-1 mb-4'>
            Frontend &amp; <span className='text-primary'>Mobile Software</span>{' '}
            Engineer
          </h1>
          <p className='lead text-light lh-lg mb-4'>
            I build <strong>modern web and mobile applications</strong> with
            React, React Native, and TypeScript — combining clean code,
            thoughtful UX, and consistent design systems.
          </p>
          <div className='d-flex flex-wrap gap-3 mb-4'>
            <Link className='btn btn-outline-accent btn-lg' to='/projects'>
              Explore my work
            </Link>
            <Link className='btn btn-outline-accent btn-lg' to='/contacts'>
              Let’s talk
            </Link>
          </div>
          <ul className='home_badges list-unstyled d-flex flex-wrap gap-3 gap-lg-3 mb-4'>
            {badges.map((badge) => (
              <li key={badge}>
                <span className='home_badge'>{badge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
