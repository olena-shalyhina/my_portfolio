import { FC } from 'react';
import Contact from '../assets/contact.jpg';
import Location from '../assets/icons/location.svg';
import '../styles/ContactsPage.scss';

export const ContactsPage: FC = () => {
  return (
    <section className="contacts_section d-flex flex-column align-items-center text-info mt-2 my-lg-2 fs-6 gap-5">
      <h2 className="text-uppercase">My contacts</h2>
      <div className="contacts_section_img">
        <img src={Contact} alt="Photo handshake" width={300} height={200} />
      </div>
      <div className="contacts_section_block text-center p-3">
        <h3>My Email</h3>
        <a href="mailto:elena.shaligina.v@gmail.com" className="fs-5 fw-normal">
          elena.shaligina.v@gmail.com
        </a>
      </div>
      <div className="d-flex justify-content-center gap-3 my-3">
        <img src={Location} alt="Location svg" width={20} height={20} />
        <span className="fs-5">Estonia, Tallinn</span>
      </div>
    </section>
  );
};
