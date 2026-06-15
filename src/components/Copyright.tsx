import { FC } from 'react';
import { Socials } from './Socials';

export const Copyright: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='d-flex flex-column align-items-center bg-dark text-primary pb-1'>
      <Socials />
      <div className='text-center small pt-3'>
        &copy; Copyright "My portfolio" Tallinn {currentYear}
      </div>
    </div>
  );
};
