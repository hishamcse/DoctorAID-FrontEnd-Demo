import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";
import {BiCaretDown} from "react-icons/bi";

const DoctorNavigation: React.FC = (props) => {

    return (
        <Navbar collapseOnSelect bg='dark' variant='dark' expand='lg' fixed='top'>
            <Container>
                <col className='col-1'/>
                <Navbar.Brand className='ml-5 text-light'>
                    <h6>
                        &nbsp;Doctor&apos;s View
                    </h6>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="navbarScroll">
                    <col className='col-8'/>
                    <Nav className='me-auto'>
                        <Nav.Link><b>Profile</b></Nav.Link>
                        <col className='col-2'/>
                        <Nav.Link><b>You</b></Nav.Link>
                        <Nav.Link><b><BiCaretDown/></b></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default DoctorNavigation;