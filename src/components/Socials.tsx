import { FC } from 'react';
import { Button } from 'react-bootstrap';

export const Socials: FC = () => {
  return (
    <div className="d-flex justify-content-сenter gap-3 my-2">
      <Button
        variant="outline-saccesful"
        size="sm"
        className="text-info"
        href="https://t.me/olena_shalyhina"
        target="_blank"
      >
        <i className="bi bi-telegram h4"></i>
      </Button>
      <Button
        variant="outline-saccesful"
        size="sm"
        className="text-info"
        href="https://linkedin.com/in/olena-shalyhina"
        target="_blank"
      >
        <i className="bi bi-linkedin h4"></i>
      </Button>
      <Button
        variant="outline-saccesful"
        size="sm"
        className="text-info"
        href="https://www.facebook.com/olenashalyhina"
        target="_blank"
      >
        <i className="bi bi-facebook h4"></i>
      </Button>
      <Button
        variant="outline-saccesful"
        size="sm"
        className="text-info"
        href="https://github.com/olena-shalyhina"
        target="_blank"
      >
        <i className="bi bi-github h4"></i>
      </Button>
    </div>
  );
};
