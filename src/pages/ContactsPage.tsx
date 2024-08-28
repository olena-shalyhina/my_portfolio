import { FC, useState } from 'react';
import { onSubmit } from '../utils/sendEmail';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Location from '../assets/icons/location.svg';
import CV from '..//assets/files/CV Olena Shalyhina Front-end.pdf';
import '../styles/contactsPage.scss';

export const ContactsPage: FC = () => {
  const [result, setResult] = useState<string>('');

  return (
    <section className="contacts_section d-flex flex-column align-items-center text-info mt-2 mt-lg-2 fs-6 gap-3">
      <h2 className="text-uppercase">My contacts</h2>
      <div className="contacts_section_form p-3">
        <h3>Get in touch</h3>

        <Form className="mx-1" onSubmit={(event) => onSubmit(event, setResult)}>
          <Form.Group className="mb-3" controlId="Name1">
            <Form.Label>Your name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
              name="name"
              className="inputGroup-sizing-sm"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Email1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Textarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="mb-4 py-1 px-3 text-success"
              required
              name="message"
            />
          </Form.Group>

          <Button
            variant="outline-success"
            className="text-info fs-5 w-100 mb-3"
            type="submit"
          >
            Submit
          </Button>
          <span>{result}</span>
        </Form>
      </div>
      <a
        href="mailto:elena.shaligina.v@gmail.com"
        className="contacts_section_form fs-6 fw-normal p-1 mb-1"
      >
        <i className="bi bi-envelope-at text-info">
          {' '}
          elena.shaligina.v@gmail.com
        </i>
      </a>

      <a
        href={CV}
        className="contacts_section_form fs-6 fw-normal p-1 mb-2"
        download
      >
        <i className="bi bi-arrow-down-circle text-info"> Download CV in PDF</i>
      </a>
      <div className="d-flex justify-content-center gap-3 mt-1">
        <img src={Location} alt="Location svg" width={18} height={18} />
        <span className="fs-6">Estonia, Tallinn</span>
      </div>
    </section>
  );
};
