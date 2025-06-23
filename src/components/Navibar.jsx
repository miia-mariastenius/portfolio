import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Navibar() {

  return (
    <Nav variant="pills" className="m-auto my-3 justify-content-center">
      <Nav.Link as={NavLink} to="/" end>
        HOME
      </Nav.Link>
      <LinkContainer to="/projects">
        <Nav.Link>PROJECTS</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
        <Nav.Link>CONTACT</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/accessibility-stetament">
        <Nav.Link>ACCESSIBILITY<br /> STATEMENT</Nav.Link>
      </LinkContainer>
    </Nav>
  )
}

export default Navibar;