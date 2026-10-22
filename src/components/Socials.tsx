import { FC } from 'react';
import { Button } from 'react-bootstrap';

const socialLinks = [
  {
    name: 'Telegram',
    icon: 'bi-telegram',
    href: 'https://t.me/olena_shalyhina',
  },
  {
    name: 'LinkedIn',
    icon: 'bi-linkedin',
    href: 'https://linkedin.com/in/olena-shalyhina',
  },
  {
    name: 'Facebook',
    icon: 'bi-facebook',
    href: 'https://www.facebook.com/olenashalyhina',
  },
  {
    name: 'GitHub',
    icon: 'bi-github',
    href: 'https://github.com/olena-shalyhina',
  },
];

export const Socials: FC = () => {
  return (
    <div className='d-flex justify-content-center gap-3'>
      {socialLinks.map(({ name, icon, href }) => (
        <Button
          key={name}
          variant='outline-accent'
          size='sm'
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={name}
        >
          <i className={`bi ${icon} h4`} aria-hidden='true'></i>
        </Button>
      ))}
    </div>
  );
};
