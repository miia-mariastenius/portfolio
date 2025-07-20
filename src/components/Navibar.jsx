import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navibar() {

  return (
    <Nav variant="pills" className="m-auto my-2 justify-content-center gap-2">
      <Nav.Link as={NavLink} to="/" end>
        HOME
      </Nav.Link>
      <Nav.Link as={NavLink} to="/projects">
        PROJECTS
      </Nav.Link>
      <Nav.Link as={NavLink} to="/contact">
        CONTACT
      </Nav.Link>
      <Nav.Link as={NavLink} to="/accessibility-statement">
        <span className="nav-multiline">ACCESSIBILITY STATEMENT</span>
      </Nav.Link>
    </Nav>
  )
}

export default Navibar;