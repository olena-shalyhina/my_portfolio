import { FC } from 'react';
import English from '../assets/certificate-en.jpg';
import React from '../assets/certificate-react.jpg';
import '../styles/aboutPage.scss';
import { Socials } from '../components/Socials';

export const AboutPage: FC = () => {
  return (
    <section className='about_section text-info '>
      <div className='container py-4'>
        <div className='row g-4 align-items-stretch justify-content-between'>
          {/* LEFT COLUMN */}
          <div className='col-12 col-lg-6  d-flex flex-column gap-4 align-items-center  justify-content-between '>
            {/* EXPERIENCE */}
            <div className='about_experience w-100 p-3'>
              <h5 className='text-primary'>EXPERIENCE</h5>
              <ul className='text-start mb-3'>
                <li className='text-light'>
                  <strong>Frontend Engineer</strong> — Commercial IT Company
                  (NDA)
                  <br />
                  Jan 2025 – Present · Tallinn
                </li>
                <hr />
                <li className='text-light'>
                  <strong>Frontend Developer</strong> — Your Price Booking
                  <br />
                  Apr 2023 – Mar 2024 · Kyiv, Ukraine · Remote
                </li>
              </ul>
            </div>
            {/* <Socials /> */}

            {/* CERTIFICATES + LANGUAGES */}
            <div className='row w-100 g-4 justify-content-between align-items-stretch'>
              {/* CERTIFICATES */}
              <div className='col-12 col-md-7 d-flex flex-column about_certificates p-3'>
                <h5 className='text-primary pb-2'>CERTIFICATES</h5>
                <div className='d-flex justify-content-evenly my-4'>
                  <a href='https://drive.google.com/file/d/1KkIfmW8q90h8c53Eu7JLyvoj3jL-aVmr/view?usp=drive_link'>
                    <img
                      src={English}
                      alt='Certificate English B1'
                      width='110'
                      height='160'
                      className='certificate'
                    />
                  </a>
                  <a href='https://drive.google.com/file/d/1zJAMv47RtC5DCiFeMUfrsLCi1i22cy6X/view?usp=drive_link'>
                    <img
                      src={React}
                      alt='Certificate React'
                      width='110'
                      height='160'
                      className='certificate'
                    />
                  </a>
                </div>
              </div>

              {/* LANGUAGES */}
              <div className='col-12 col-md-4 d-flex flex-column about_languages p-3'>
                <h5 className='text-primary'>LANGUAGES</h5>
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
          <div className='col-12 col-lg-6  d-flex  align-items-center justify-content-center '>
            <div className='about_experience  d-flex flex-column p-3  pb-0 h-100'>
              <h5 className='text-primary'>KEY RESPONSIBILITIES</h5>
              <ul className='text-start small'>
                <li className='text-light '>
                  Development of web and mobile user interfaces using modern
                  frontend tools and React Native.
                </li>
                <hr />
                <li className='text-light'>
                  Implementation of screens, navigation patterns, and reusable
                  UI components.
                </li>
                <hr />
                <li className='text-light'>
                  Working with REST APIs, managing data flows, and applying
                  TypeScript to improve code reliability and maintainability.
                </li>
                <hr />
                <li className='text-light'>
                  Creating adaptive, responsive, and cross‑browser interfaces
                  based on theming and component‑driven architecture.
                </li>
                <hr />
                <li className='text-light'>
                  Developing interactive UI elements, working with vector
                  graphics, and improving user flows across application modules.
                </li>
                <hr />
                <li className='text-light'>
                  Performance optimization, stability improvements, and
                  enhancement of overall user experience.
                </li>
                <hr />
                <li className='text-light'>
                  Contributing to internal UI components and improving interface
                  architecture.
                </li>
                <hr />
                <li className='text-light'>
                  Participating in engineering discussions, code reviews, and
                  collaborative development processes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section className='about_section mt-3 d-flex align-items-center justify-content-center text-info mt-2 mb-3 fs-6 gap-4'>
    //   {/* <h2 className='text-uppercase'>About me</h2> */}
    //   <div className='about_skills d-flex col-md-12 col-lg-6 flex-column align-items-center '>
    //     <div className='d-flex flex-column  justify-content-center gap-5'>
    //       <div className='about_education flex-column align-items-center  justify-content-center w-100 p-2 pt-3'>
    //         <h5 className='text-accent'>EXPERIENCE</h5>
    //         <ul className='text-start'>
    //           <li className='text-light'>
    //             <strong>Frontend Engineer</strong> — Commercial IT Company (NDA)
    //             <br />
    //             Jan 2025 – Present · Tallinn · Hybrid
    //           </li>
    //           <hr />

    //           <li className='text-light'>
    //             <strong>Frontend Developer</strong> — Your Price Booking
    //             <br />
    //             Apr 2023 – Mar 2024 · Kyiv, Ukraine · Remote
    //           </li>
    //         </ul>
    //       </div>
    //       <div className='d-flex align-items-center justify-content-center gap-4'>
    //         <div className='about_certificates w-100 py-3 pt-3'>
    //           <h5 className='text-accent pb-2'>СERTIFICATES</h5>
    //           <div className='d-flex justify-content-evenly'>
    //             <a
    //               href='https://drive.google.com/file/d/1KkIfmW8q90h8c53Eu7JLyvoj3jL-aVmr/view?usp=drive_link'
    //               className='certificate py-3 p-lg-2'
    //             >
    //               <img
    //                 src={English}
    //                 alt='Сertificate English B1'
    //                 width='100'
    //                 height='160'
    //               />
    //             </a>
    //             <a
    //               href='https://drive.google.com/file/d/1zJAMv47RtC5DCiFeMUfrsLCi1i22cy6X/view?usp=drive_link'
    //               className='certificate py-3 p-lg-2'
    //             >
    //               <img
    //                 src={React}
    //                 alt='Сertificate React'
    //                 className='certificate'
    //                 width='100'
    //                 height='160'
    //               />
    //             </a>
    //           </div>
    //         </div>
    //         <div className='about_languages w-100 p-2 pt-3'>
    //           <h5 className='text-accent'>LANGUAGES</h5>
    //           <ul>
    //             <li>Ukrainian (С2)</li>
    //             <hr />
    //             <li>English (B1 Intermediate)</li>
    //             <hr />
    //             <li>Estonian (А2)</li>
    //             <hr />
    //             <li>Russian (С2)</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='about_experiens d-flex flex-column col-md-12 col-lg-6 align-items-center '>
    //     <h5 className='pt-3 text-accent'>KEY RESPONSIBILITIES</h5>
    //     <ul className='h-75 text-start'>
    //       <li className='text-light'>
    //         Development of web and mobile user interfaces using modern frontend
    //         tools and React Native.
    //       </li>
    //       <hr />
    //       <li className='text-light'>
    //         Implementation of screens, navigation patterns, and reusable UI
    //         components.
    //       </li>
    //       <hr />
    //       <li className='text-light'>
    //         Working with REST APIs, managing data flows, and applying TypeScript
    //         to improve code reliability and maintainability.
    //       </li>
    //       <hr />
    //       <li className='text-light'>
    //         Creating adaptive, responsive, and cross‑browser interfaces based on
    //         theming and component‑driven architecture.
    //       </li>
    //       <hr />
    //       <li className='text-light'>
    //         Developing interactive UI elements, working with vector graphics,
    //         and improving user flows across application modules.
    //       </li>
    //       <hr />
    //       <li className='text-light'>
    //         Performance optimization, stability improvements, and enhancement of
    //         overall user experience.
    //       </li>
    //       <hr />
    //       <li className='text-light'>
    //         Contributing to internal UI components and improving interface
    //         architecture.
    //       </li>
    //       <hr />
    //       <li className='text-light'>
    //         Participating in engineering discussions, code reviews, and
    //         collaborative development processes.
    //       </li>
    //     </ul>
    //   </div>
    // </section>
  );
};
