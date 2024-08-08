import { FC } from 'react';
import { Button } from 'react-bootstrap';

export const Copyright: FC = () => {
  // const url = import.meta.env.BASE_URL;

  /* href={`${url}`} */

  return (
    <div className=" bg-dark text-saccesful pt-3">
      <Button
        type="button"
        variant="saccesful"
        size="sm"
        href="#home"
        className="text-info"
      >
        &#9650; GO UP &#9650;
      </Button>
      <div className="text-center border-2 border-info p-3">
        &copy; Copyright "My portfolio" 2024
      </div>
    </div>
  );
};
