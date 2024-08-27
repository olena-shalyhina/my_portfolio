import { FC, FormEvent, useState } from 'react';
import Location from '../assets/icons/location.svg';
import '../styles/ContactsPage.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ACCESS_KEY: string = import.meta.env.VITE_ACCESS_KEY;

export const ContactsPage: FC = () => {
  const [result, setResult] = useState<string>('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending....');

    const clearMessage = () => {
      setTimeout(() => {
        setResult('');
      }, 5000);
    };
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    formData.append('access_key', ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        formElement.reset();
        clearMessage();
      } else {
        console.log('Error', data);
        setResult(data.message);
        clearMessage();
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setResult('An error occurred. Please try again.');
      clearMessage();
    }
  };

  return (
    <section className="contacts_section d-flex flex-column align-items-center text-info mt-2 mt-lg-2 fs-6 gap-3">
      <h2 className="text-uppercase">My contacts</h2>
      <a
        href="mailto:elena.shaligina.v@gmail.com"
        className="contacts_section_form fs-5 fw-normal p-1 mb-2"
      >
        elena.shaligina.v@gmail.com
      </a>

      <div className="contacts_section_form p-3">
        <h3>Get in touch</h3>

        <Form className="mx-1" onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="Name1">
            <Form.Label>Your name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
              name="name"
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
            className="text-info w-100 mb-3"
            type="submit"
          >
            Submit
          </Button>
          <span>{result}</span>
        </Form>
      </div>

      <div className="d-flex justify-content-center gap-3 mt-3">
        <img src={Location} alt="Location svg" width={22} height={22} />
        <span className="fs-5">Estonia, Tallinn</span>
      </div>
    </section>
  );
};
