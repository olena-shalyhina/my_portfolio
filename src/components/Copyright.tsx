import { FC } from 'react';
import { Socials } from './Socials';

export const Copyright: FC = () => {
  return (
    <div
      className="d-flex flex-column align-items-center 
    bg-dark text-success"
    >
      <Socials />
      <div className="text-center small py-2">
        &copy; Copyright "My portfolio" Tallinn 2024
      </div>
    </div>
  );
};
