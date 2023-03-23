import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopNavBar = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container fluid={true}>
        <Navbar.Brand>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <defs>
              <radialGradient
                id="radial-gradient"
                cx="210.69"
                cy="290.9"
                r="489.65"
                fx="-7.15"
                fy="607.1"
                gradientTransform="matrix(1 .00262 -.00215 .82 .63 51.83)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#de26b8" />
                <stop offset=".26" stop-color="#ff255b" />
                <stop offset=".52" stop-color="#ff9506" />
                <stop offset=".74" stop-color="#e7e926" />
                <stop offset=".98" stop-color="#94ff26" />
              </radialGradient>
            </defs>
            <path
              d="M0 0v512h512V0H0Zm337.37 130.32c-1.48 7.64-4.06 15.18-8.39 21.77 121.64 59.86 38.92 273.23-136.43 268.98-106.87-2.59-103.35-58.87-82.36-90.67 20.99-31.8 32.66-45.38 46.58-102.7 13.93-57.31 82.21-100.93 144.19-85.68 7.13 1.75 13.76 3.93 19.95 6.45 6.9-14.97 5.67-32.42-4.98-55.69l19.3-12.21s4.1 15.36 3.75 33.6c19.8-32.29 59.99-33.57 95.93-2.98-29.03 49.88-75.47 48.67-97.55 19.12Z"
              fill="#FFF"
            />
            <path
              d="M338.99 114.18c.35-18.24-3.75-33.6-3.75-33.6l-19.3 12.21c10.65 23.27 11.88 40.72 4.98 55.69-6.19-2.52-12.82-4.7-19.95-6.45-61.99-15.26-130.27 28.36-144.19 85.68-13.93 57.31-25.59 70.9-46.58 102.7-20.99 31.8-24.51 88.08 82.36 90.67 175.35 4.25 258.08-209.12 136.43-268.98 4.33-6.59 6.92-14.13 8.39-21.77 22.07 29.55 68.52 30.76 97.55-19.12-35.94-30.59-76.13-29.31-95.93 2.98Z"
              fill="#FFF"
            />
            <path
              fill="url(#radial-gradient)"
              d="M338.99 114.18c.35-18.24-3.75-33.6-3.75-33.6l-19.3 12.21c10.65 23.27 11.88 40.72 4.98 55.69-6.19-2.52-12.82-4.7-19.95-6.45-61.99-15.26-130.27 28.36-144.19 85.68-13.93 57.31-25.59 70.9-46.58 102.7-20.99 31.8-24.51 88.08 82.36 90.67 175.35 4.25 258.08-209.12 136.43-268.98 4.33-6.59 6.92-14.13 8.39-21.77 22.07 29.55 68.52 30.76 97.55-19.12-35.94-30.59-76.13-29.31-95.93 2.98Z"
            />
          </svg>
          Mangologi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavBar;
