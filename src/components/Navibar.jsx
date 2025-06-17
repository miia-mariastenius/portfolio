import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Navibar() {

  return (
    <Nav variant="pills" className="m-auto my-2 justify-content-center">
      <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/projects">
        <Nav.Link>Projects</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
        <Nav.Link>Contact</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/accessibility-stetament">
        <Nav.Link>Accessibility</Nav.Link>
      </LinkContainer>
    </Nav>
  )
}

export default Navibar;