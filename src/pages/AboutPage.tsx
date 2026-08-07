import { FC } from 'react';
import English from '../assets/images/certificate-en.jpg';
import React from '../assets/images/certificate-react.jpg';
import '../styles/aboutPage.scss';

export const AboutPage: FC = () => {
  return (
    <section className='about_section text-secondary mb-3 my-xxl-5'>
      <h5 className='text-uppercase d-lg-none'>About Me</h5>
      <div className='container'>
        <div className='row align-items-stretch justify-content-between'>
          {/* LEFT COLUMN */}
          <div className='col-12 col-lg-6 d-flex flex-column gap-3 gap-xxl-4 align-items-center justify-content-between'>
            {/* EXPERIENCE */}
            <div className='about_experience w-100 p-3'>
              <h6 className='text-accent'>EXPERIENCE</h6>
              <ul className='text-start mb-3'>
                <li className='text-light py-0 py-lg-2'>
                  <strong>Frontend Engineer</strong> — Commercial IT Company
                  (NDA)
                  <br />
                  Mar 2025 – Apr 2026 · Tallinn
                </li>
                <hr />
                <li className='text-light py-0 py-lg-2 py-xxl-0'>
                  <strong>Frontend Developer</strong> — Your Price Booking
                  <br />
                  Apr 2023 – Mar 2024 · Kyiv, Ukraine · Remote
                </li>
              </ul>
            </div>

            {/* CERTIFICATES + LANGUAGES */}
            <div className='row w-100 justify-content-between align-items-between'>
              {/* CERTIFICATES */}
              <div className='col-12 col-md-7 d-flex flex-column about_certificates p-3'>
                <h6 className='text-accent pb-2'>CERTIFICATES</h6>
                <div className='d-flex gap-2 justify-content-evenly my-4'>
                  <a href='https://drive.google.com/file/d/1KkIfmW8q90h8c53Eu7JLyvoj3jL-aVmr/view?usp=drive_link'>
                    <img
                      src={English}
                      alt='Certificate English B1'
                      width='90'
                      height='140'
                      className='certificate'
                    />
                  </a>
                  <a href='https://drive.google.com/file/d/1zJAMv47RtC5DCiFeMUfrsLCi1i22cy6X/view?usp=drive_link'>
                    <img
                      src={React}
                      alt='Certificate React'
                      width='90'
                      height='140'
                      className='certificate'
                    />
                  </a>
                </div>
              </div>

              {/* LANGUAGES */}
              <div className='col-12 col-md-4 mt-3 mt-md-0 d-flex flex-column about_languages p-3'>
                <h6 className='text-accent'>LANGUAGES</h6>
                <ul className='mt-auto'>
                  <li className='text-light'>Ukrainian (C2)</li>
                  <hr />
                  <li className='text-light'>English (B1 Intermediate)</li>
                  <hr />
                  <li className='text-light'>Estonian (A2)</li>
                  <hr />
                  <li className='text-light'>Russian (C2)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className='col-12 col-lg-6 d-flex align-items-center my-3 my-lg-0 justify-content-center'>
            <div className='about_responsibilities d-flex flex-column  p-3 w-100 h-100'>
              <h6 className='text-accent text-uppercase'>
                Core Responsibilities
              </h6>
              <ul className='custom-list text-start d-flex flex-column'>
                <li className='text-light'>
                  Building web and mobile interfaces with React, React Native,
                  and modern frontend tooling.
                </li>
                <hr />
                <li className='text-light'>
                  Implementing screens, navigation flows, and reusable UI
                  components.
                </li>
                <hr />
                <li className='text-light'>
                  Integrating REST APIs, managing data, and ensuring type‑safe
                  logic with TypeScript.
                </li>
                <hr />
                <li className='text-light'>
                  Creating adaptive, responsive, and cross‑browser layouts.
                </li>
                <hr />
                <li className='text-light'>
                  Developing interactive UI elements and improving user flows.
                </li>
                <hr />
                <li className='text-light'>
                  Optimizing performance, stability, and overall UX.
                </li>
                <hr />
                <li className='text-light'>
                  Contributing to internal UI libraries and interface
                  architecture.
                </li>
                <hr />
                <li className='text-light'>
                  Participating in engineering discussions and code reviews.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
