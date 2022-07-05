import React from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './UpperMenu.css';

class UpperMenu extends React.Component {
    render() {
      return (
        <div className='header'>
          <div>
            <Navbar bg="white" expand="lg">
                    <Container className='UpperMenu'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav justify-content-around">
                        <Nav className="me-auto">
                          <Nav.Link className='test' href="/MyPage">MyPage</Nav.Link>
                           <Nav.Link className='test' href="/Ranking">Ranking</Nav.Link>
                           <Nav.Link className='test' href="/FavoriteTeam">FavoriteTeam</Nav.Link>
                           <Nav.Link className='test' href="/FavoriteVideo">FavoriteVideo</Nav.Link>
                           <Nav.Link className='test' href="/Settings">Settings</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
          </div>  
        </div>
      );
    }
  }
  
  export default UpperMenu;