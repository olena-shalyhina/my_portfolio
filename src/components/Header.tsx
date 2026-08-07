import { FC, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom';
import '../App.scss';

export const Header: FC = () => {
  const [expanded, setExpanded] = useState(false);

  const url = import.meta.env.BASE_URL;
  const location = useLocation();
  const activeLink = url + location.pathname.slice(1);

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand='lg'
      fixed='top'
      expanded={expanded}
      className='bg-dark border border-top-0 border-start-0 border-end-0 border-secondary'
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          to='/me'
          onClick={closeMenu}
          className='text-uppercase ps-2 d-flex align-items-center gap-2 fs-4'
        >
          OLENA SHALYHINA
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav activeKey={activeLink} className='fs-5'>
            <Nav.Link
              as={NavLink}
              to='/me'
              end
              onClick={closeMenu}
              className={`nav-link ${activeLink === url + 'me' ? 'active' : ''}`}
            >
              ME
            </Nav.Link>

            <Nav.Link as={NavLink} to='/about' onClick={closeMenu}>
              ABOUT
            </Nav.Link>

            <Nav.Link as={NavLink} to='/skills' onClick={closeMenu}>
              SKILLS
            </Nav.Link>

            <Nav.Link as={NavLink} to='/projects' onClick={closeMenu}>
              PROJECTS
            </Nav.Link>

            <Nav.Link as={NavLink} to='/contacts' onClick={closeMenu}>
              CONTACTS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
