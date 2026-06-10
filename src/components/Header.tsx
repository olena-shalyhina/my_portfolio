import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.scss';
import { useLocation } from 'react-router-dom';
import logo from '../assets/SH.jpg';
// import logo from '../assets/new_logo.png';
export const Header: FC = () => {
  const url = import.meta.env.BASE_URL;
  const location = useLocation();
  const activeLink = url + location.pathname.slice(1);

  return (
    <Navbar
      expand='lg'
      fixed='top'
      className='bg-dark border border-top-0 border-start-0 border-end-0  border-secondary'
    >
      <Container>
        <Navbar.Brand
          href={`${url}`}
          className='text-uppercase ps-2 d-flex align-items-center gap-2 fs-4'
        >
          OLENA SHALYHINA
        </Navbar.Brand>
        <>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-end'
          >
            <Nav activeKey={activeLink} className='fs-5'>
              <Nav.Link href={`${url}me`}>{'Me'.toUpperCase()}</Nav.Link>
              <Nav.Link href={`${url}about`}>{'About'.toUpperCase()}</Nav.Link>
              <Nav.Link href={`${url}skills`}>
                {'Skills'.toUpperCase()}
              </Nav.Link>
              <Nav.Link href={`${url}projects`}>
                {'Projects'.toUpperCase()}
              </Nav.Link>
              <Nav.Link href={`${url}contacts`}>
                {'Contacts'.toUpperCase()}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </>
      </Container>
    </Navbar>
  );
};
