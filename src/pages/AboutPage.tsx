import { FC } from 'react';
import English from '../assets/certificate-en.jpg';
import React from '../assets/certificate-react.jpg';
import '../styles/aboutPage.scss';

export const AboutPage: FC = () => {
  return (
    <section className='about_section text-secondary my-3'>
      <h5 className='text-uppercase d-lg-none'>About Me</h5>
      <div className='container py-3'>
        <div className='row g-4 align-items-stretch justify-content-between'>
          {/* LEFT COLUMN */}
          <div className='col-12 col-lg-6  d-flex flex-column gap-4 align-items-center  justify-content-between '>
            {/* EXPERIENCE */}
            <div className='about_experience w-100 p-3 order-1 order-lg-1'>
              <h6 className='text-accent'>EXPERIENCE</h6>
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
            <div className='row w-100 g-4 justify-content-between align-items-stretch order-3 order-lg-2'>
              {/* CERTIFICATES */}
              <div className='col-12 col-md-7 d-flex flex-column about_certificates p-3'>
                <h6 className='text-accent pb-2'>CERTIFICATES</h6>
                <div className='d-flex gap-2 justify-content-evenly my-4'>
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
              <div className='col-12 col-md-4 d-flex flex-column about_languages p-3 order-4 order-lg-3'>
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
          <div className='col-12 col-lg-6  d-flex  align-items-center justify-content-center order-2 order-lg-4'>
            <div className='about_responsibilities d-flex flex-column  py-3 px-2 p-xxl-3  pb-0 h-100'>
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
                {/* <li className='text-light'>
                  Development of web and mobile user interfaces using modern
                  frontend tools and React Native.
                </li>

                <li className='text-light'>
                  Implementation of screens, navigation patterns, and reusable
                  UI components.
                </li>

                <li className='text-light'>
                  Working with REST APIs, managing data flows, and applying
                  TypeScript to improve code reliability and maintainability.
                </li>

                <li className='text-light'>
                  Creating adaptive, responsive, and cross‑browser interfaces
                  based on theming and component‑driven architecture.
                </li>
                <li className='text-light'>
                  Developing interactive UI elements, working with vector
                  graphics, and improving user flows across application modules.
                </li>

                <li className='text-light'>
                  Performance optimization, stability improvements, and
                  enhancement of overall user experience.
                </li>

                <li className='text-light'>
                  Contributing to internal UI components and improving interface
                  architecture.
                </li>

                <li className='text-light'>
                  Participating in engineering discussions, code reviews, and
                  collaborative development processes.
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className='about_section text-secondary '>
    //   <div className='container py-4'>
    //     {/* ВАЖНО: flex-column на mobile, flex-lg-row на desktop */}
    //     <div className='row g-4 align-items-stretch justify-content-between flex-column flex-lg-row'>
    //       {/* LEFT COLUMN — mobile order 1 */}
    //       <div className='col-12 col-lg-6 d-flex flex-column gap-4 align-items-center justify-content-between order-1 order-lg-1'>
    //         {/* EXPERIENCE — mobile 1, desktop 1 */}
    //         <div className='about_experience w-100 p-3 order-1 order-lg-1'>
    //           <h5 className='text-secondary'>EXPERIENCE</h5>
    //           <ul className='text-start mb-3'>
    //             <li className='text-light'>
    //               <strong>Frontend Engineer</strong> — Commercial IT Company
    //               (NDA)
    //               <br />
    //               Jan 2025 – Present · Tallinn
    //             </li>
    //             <hr />
    //             <li className='text-light'>
    //               <strong>Frontend Developer</strong> — Your Price Booking
    //               <br />
    //               Apr 2023 – Mar 2024 · Kyiv, Ukraine · Remote
    //             </li>
    //           </ul>
    //         </div>

    //         {/* CERTIFICATES + LANGUAGES */}
    //         <div className='row w-100 g-4 justify-content-between align-items-stretch'>
    //           {/* CERTIFICATES — mobile 3, desktop 2 */}
    //           <div className='col-12 col-md-7 d-flex flex-column about_certificates p-3 order-3 order-lg-2'>
    //             <h5 className='text-secondary pb-2'>CERTIFICATES</h5>
    //             <div className='d-flex justify-content-evenly my-4'>
    //               <a href='https://drive.google.com/file/d/1KkIfmW8q90h8c53Eu7JLyvoj3jL-aVmr/view?usp=drive_link'>
    //                 <img
    //                   src={English}
    //                   alt='Certificate English B1'
    //                   width='110'
    //                   height='160'
    //                   className='certificate'
    //                 />
    //               </a>
    //               <a href='https://drive.google.com/file/d/1zJAMv47RtC5DCiFeMUfrsLCi1i22cy6X/view?usp=drive_link'>
    //                 <img
    //                   src={React}
    //                   alt='Certificate React'
    //                   width='110'
    //                   height='160'
    //                   className='certificate'
    //                 />
    //               </a>
    //             </div>
    //           </div>

    //           {/* LANGUAGES — mobile 4, desktop 3 */}
    //           <div className='col-12 col-md-4 d-flex flex-column about_languages p-3 order-4 order-lg-3'>
    //             <h5 className='text-secondary'>LANGUAGES</h5>
    //             <ul className='mt-auto'>
    //               <li className='text-light'>Ukrainian (C2)</li>
    //               <hr />
    //               <li className='text-light'>English (B1 Intermediate)</li>
    //               <hr />
    //               <li className='text-light'>Estonian (A2)</li>
    //               <hr />
    //               <li className='text-light'>Russian (C2)</li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>

    //       {/* RIGHT COLUMN — mobile 2, desktop 4 */}
    //       <div className='col-12 col-lg-6 d-flex align-items-center justify-content-center order-2 order-lg-4'>
    //         <div className='about_experience d-flex flex-column py-3 px-2 p-lg-3 pb-0 h-100'>
    //           <h5 className='text-secondary'>KEY RESPONSIBILITIES</h5>
    //           <ul className='text-start small'>
    //             <li className='text-light'>
    //               Development of web and mobile user interfaces using modern
    //               frontend tools and React Native.
    //             </li>
    //             <hr />
    //             <li className='text-light'>
    //               Implementation of screens, navigation patterns, and reusable
    //               UI components.
    //             </li>
    //             <hr />
    //             <li className='text-light'>
    //               Working with REST APIs, managing data flows, and applying
    //               TypeScript to improve code reliability and maintainability.
    //             </li>
    //             <hr />
    //             <li className='text-light'>
    //               Creating adaptive, responsive, and cross‑browser interfaces
    //               based on theming and component‑driven architecture.
    //             </li>
    //             <hr />
    //             <li className='text-light'>
    //               Developing interactive UI elements, working with vector
    //               graphics, and improving user flows across application modules.
    //             </li>
    //             <hr />
    //             <li className='text-light'>
    //               Performance optimization, stability improvements, and
    //               enhancement of overall user experience.
    //             </li>
    //             <hr />
    //             <li className='text-light'>
    //               Contributing to internal UI components and improving interface
    //               architecture.
    //             </li>
    //             <hr />
    //             <li className='text-light'>
    //               Participating in engineering discussions, code reviews, and
    //               collaborative development processes.
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};
