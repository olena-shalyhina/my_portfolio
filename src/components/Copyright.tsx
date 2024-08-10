import { FC } from 'react';

export const Copyright: FC = () => {
  return (
    <div
      className="d-flex flex-column align-items-center 
    bg-dark text-saccesful "
    >
      <div className="text-center border-2 border-info py-3">
        &copy; Copyright "My portfolio" 2024
      </div>
    </div>
  );
};
