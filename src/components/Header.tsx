import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.scss';
import { useLocation } from 'react-router-dom';

export const Header: FC = () => {
  const location = useLocation();

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="bg-dark border border-top-0 border-start-0 border-end-0  border-success"
    >
      <Container>
        <Navbar.Brand href="/me" className="text-uppercase ps-1">
          OLENA SHALYHINA
        </Navbar.Brand>
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav activeKey={location.pathname} className="fs-5">
              <Nav.Link href="/me">Me</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/skills">Skills</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/contacts">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </>
      </Container>
    </Navbar>
  );
};
