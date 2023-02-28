import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
export function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">E-Farmer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to={'/'}>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/transaction'}>
                                <Nav.Link>Transaction</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/signup'}>
                                <Nav.Link>Sign Up</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/login'}>
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/adminCropTable'}>
                                <Nav.Link>Admin Crop Table</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/cropStatusFarmer'}>
                                <Nav.Link>Crop Status</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/addCrop'}>
                                <Nav.Link>Add Crop</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
  );
}
