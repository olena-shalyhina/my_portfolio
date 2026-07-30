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
    <section className='contacts_section d-flex flex-column align-items-center text-secondary gap-3 gap-xxl-5 my-3 my-lg-1'>
      <h5 className='text-uppercase d-lg-none'>My contacts</h5>
      <div className='contacts_section_form p-3'>
        <h3 className='fs-6 fs-md-5 fs-lg-4'>Get in touch</h3>

        <Form className='mx-1' onSubmit={(event) => onSubmit(event, setResult)}>
          <Form.Group className='text-light mb-2' controlId='Name1'>
            <Form.Label>Your name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your name'
              required
              name='name'
              className='inputGroup-sizing-sm'
            />
          </Form.Group>
          <Form.Group className='text-light mb-2' controlId='Email1'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Your email'
              required
              name='email'
            />
          </Form.Group>
          <Form.Group className='text-light mb-2' controlId='Textarea1'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Your message'
              className='mb-4 py-1 px-3 text-success'
              required
              name='message'
            />
          </Form.Group>

          <Button
            variant='outline-accent'
            className='fs-5  w-100 mb-2'
            type='submit'
          >
            Submit
          </Button>
          <span>{result}</span>
        </Form>
      </div>
      <a
        href='mailto:shalyhina.olena@gmail.com'
        className='contacts_section_form fs-6 fw-normal p-2 mb-1'
      >
        <i className='bi bi-envelope-at text-light'></i>
        <span className='text-light'> shalyhina.olena@gmail.com</span>
      </a>

      <a
        href={CV}
        className='contacts_section_form fw-normal p-2 mb-2'
        download
      >
        <i className='bi bi-arrow-down-circle text-light' />
        <span className='text-light'> Download CV in PDF</span>
      </a>
      <div className='mt-3 d-lg-none d-xxl-block'>
        <img src={Location} alt='Location svg' width={18} height={18} />
        <span className='text-light fs-6 mb-2 ps-2'> Estonia, Tallinn</span>
      </div>
    </section>
  );
};
