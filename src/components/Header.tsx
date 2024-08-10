import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.scss';

export const Header: FC = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="bg-dark border border-top-0 border-start-0 border-end-0  border-saccesful"
    >
      <Container>
        <Navbar.Brand href="/" className="text-uppercase">
          OLENA SHALYHINA
        </Navbar.Brand>
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="fs-5">
              <Nav.Link className="" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="" href="/skills">
                Skills
              </Nav.Link>
              <Nav.Link className="" href="/projects">
                Projects
              </Nav.Link>
              <Nav.Link className="" href="/contacts">
                Contacts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </>
      </Container>
    </Navbar>
  );
};
