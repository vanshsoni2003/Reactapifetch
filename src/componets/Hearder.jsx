import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Hearder = ()=>{
    return (
        <>
          <Navbar expand="lg" className="bg-blue-500" >
      <Container className=''>
        <Navbar.Brand href="#home" className='text-white'>news api</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto  ">
            <NavLink href="#home" className='text-white'>Home</NavLink>
            <NavLink href="#home">about</NavLink>
            <NavLink href="#home">servies</NavLink>
            <NavLink href="#home">contact</NavLink>

          
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )

}

export default Hearder