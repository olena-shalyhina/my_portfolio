import { FC } from 'react';
import { Socials } from './Socials';

export const Copyright: FC = () => {
  return (
    <div
      className="d-flex flex-column align-items-center 
    bg-dark text-saccesful "
    >
      <Socials />
      <div className="text-center border-2 border-info py-1">
        &copy; Copyright "My portfolio" 2024
      </div>
    </div>
  );
};
