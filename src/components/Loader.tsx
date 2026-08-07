import logoImage from '../assets/images/new_logo.png';
import '../styles/Loader.scss';

export const Loader = () => {
  return (
    <div className='loader-overlay d-flex flex-column gap-5 '>
      <img src={logoImage} className='loader-img' alt='loading' />
      <span className='loader-text  p-4'>Welcome ...</span>
    </div>
  );
};
