import { FC } from 'react';
import English from '../assets/images/certificate-en.webp';
import React from '../assets/images/certificate-react.webp';
import EnglishFull from '../assets/images/certificate-en.jpg';
import ReactFull from '../assets/images/certificate-react.jpg';
import '../styles/aboutPage.scss';

const responsibilities = [
  'Building web and mobile interfaces with React, React Native, and modern frontend tooling.',
  'Implementing screens, navigation flows, and reusable UI components based on Figma designs, ensuring visual consistency.',
  'Creating and maintaining a custom design system with reusable components, design tokens, theming, and scalable interface architecture.',
  'Integrating REST APIs and backend services, handling asynchronous data flows, and managing application data with TypeScript.',
  'Creating responsive, adaptive, and cross-browser layouts, including light and dark themes and localization (i18n).',
  'Developing interactive UI elements and improving navigation, user flows, and overall UX.',
  'Improving application performance, stability, and maintainability.',
  'Creating and maintaining technical documentation for frontend features, components, and workflows.',
  'Collaborating through engineering discussions, code reviews, and established team workflows.',
  'Using AI-assisted development tools to support coding and problem-solving tasks.',
];

const languages = [
  { name: 'Ukrainian', level: 'C2' },
  { name: 'English', level: 'B1' },
  { name: 'Estonian', level: 'A2' },
  { name: 'Russian', level: 'C2' },
];

const experience = [
  {
    title: 'Independent Full-Stack Developer',
    dates: 'May 2026 – Present',
    description:
      'Focused on professional development and building an independent full-stack language-learning application.',
  },
  {
    title: 'Software Engineer',
    organization: 'Commercial IT Company (NDA)',
    dates: 'Mar 2025 – Apr 2026 · Tallinn',
  },
  {
    title: 'Independent Developer',
    dates: 'Apr 2024 – Feb 2025',
    description:
      'Focused on frontend development, personal projects, and strengthening my technical skills while preparing for my next professional opportunity.',
  },
  {
    title: 'Frontend Developer',
    organization: 'Your Price Booking',
    dates: 'Apr 2023 – Mar 2024 · Kyiv, Ukraine · Remote',
  },
];

export const AboutPage: FC = () => {
  return (
    <section className='about_section text-secondary mb-5 mb-xxl-5'>
      <h5 className='page_title text-uppercase d-lg-none'>About Me</h5>
      <div className='container'>
        <div className='row g-4 align-items-stretch'>
          <div className='col-12 col-lg-5 d-flex flex-column gap-4 align-items-between'>
            <div className='about_experience w-100 p-3'>
              <h6 className='text-accent'>EXPERIENCE</h6>
              <ul className='about_experience_list text-start list-unstyled p-0 mb-3'>
                {experience.map(
                  ({ title, organization, dates, description }) => (
                    <li
                      className='experience-item text-light my-2 py-2 px-3 border-start border-3'
                      key={`${title}-${dates}`}
                    >
                      <strong>{title}</strong>
                      {organization && <> — {organization}</>}
                      <br />
                      {dates}
                      {description && (
                        <p className='mt-2 mb-0'>{description}</p>
                      )}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className='row g-3'>
              <div className='col-12 col-sm-6 '>
                <div className='about_certificates h-100 p-3 rounded-3 border border-secondary'>
                  <h6 className='text-accent pb-2'>CERTIFICATES</h6>
                  <div className='d-flex gap-3 justify-content-center my-4'>
                    <a
                      href={EnglishFull}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        src={English}
                        alt='Certificate English B1'
                        width='92'
                        height='132'
                        className='certificate'
                        decoding='async'
                      />
                    </a>
                    <a
                      href={ReactFull}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        src={React}
                        alt='Certificate React'
                        width='92'
                        height='132'
                        className='certificate'
                        decoding='async'
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-6'>
                <div className='about_languages h-100 p-3 rounded-3 border border-secondary'>
                  <h6 className='text-accent'>LANGUAGES</h6>
                  <div className='d-flex flex-column gap-3'>
                    {languages.map(({ name, level }) => (
                      <span
                        className='d-flex justify-content-between rounded-pill border border-secondary px-3 py-2 text-light'
                        key={name}
                      >
                        {name} <b className='text-accent'>{level}</b>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-lg-7'>
            <div className='about_responsibilities h-100 p-3 rounded-3 border border-secondary d-flex flex-column'>
              <h6 className='text-accent text-uppercase'>
                Core Responsibilities
              </h6>
              <ul className='row row-cols-1 row-cols-sm-2 g-3 my-2 p-0 flex-grow-1 align-content-stretch'>
                {responsibilities.map((responsibility) => (
                  <li className='col d-flex' key={responsibility}>
                    <div className='responsibility-item d-flex align-items-start gap-2 w-100 p-3 rounded-3 border border-secondary border-opacity-50 text-light text-start'>
                      <span
                        className='responsibility-marker flex-shrink-0 mt-1'
                        aria-hidden='true'
                      />
                      <span>{responsibility}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
