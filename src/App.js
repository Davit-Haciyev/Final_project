import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {UncontrolledCarousel} from 'reactstrap'
import Logo from "./img/logo.png"
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import HerosBlocks from './HerosBlocks';


function OffcanvasExample() {

  return (
    
    
    <div className='mainbody'>
      
      <Navbar expand="sm">
      <Container fluid>
        <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top logoclass"
              alt="React Bootstrap logo"
              Link="#"
            />
        <Navbar.Brand href="http://127.0.0.1:5500/myproject/src/herosearch.html">
          Super Hero Searcher</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Marvel</Nav.Link>
            <Nav.Link href="#action2">Məlumat</Nav.Link>
            <NavDropdown title="Menyu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success"><b>Login</b></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className='Caruselwidth'>
        <UncontrolledCarousel 
          items={[
            {
              altText: '',
              caption: '',
              key: 1,
              src: `${img1}`
            },
            {
              altText: '',
              caption: '',
              key: 2,
              src: `${img2}`
            },
            {
              altText: '',
              caption: '',
              key: 3,
              src: `${img3}`
            }
          ]}
          />
      </div>
      
      <div className='Whitebox'>
          <HerosBlocks/>
      </div>
    </div>
  );
}

export default OffcanvasExample;