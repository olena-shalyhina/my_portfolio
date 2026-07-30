import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../App.scss';

export const Header: FC = () => {
  return (
    <Navbar
      expand='lg'
      fixed='top'
      className='bg-dark border border-top-0 border-start-0 border-end-0 border-secondary'
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          to='/me'
          className='text-uppercase ps-2 d-flex align-items-center gap-2 fs-4'
        >
          OLENA SHALYHINA
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav className='fs-5'>
            <Nav.Link as={NavLink} to='/me' end>
              ME
            </Nav.Link>

            <Nav.Link as={NavLink} to='/about'>
              ABOUT
            </Nav.Link>

            <Nav.Link as={NavLink} to='/skills'>
              SKILLS
            </Nav.Link>

            <Nav.Link as={NavLink} to='/projects'>
              PROJECTS
            </Nav.Link>

            <Nav.Link as={NavLink} to='/contacts'>
              CONTACTS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
