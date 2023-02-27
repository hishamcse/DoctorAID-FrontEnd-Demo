import {Container, Nav, Navbar} from "react-bootstrap";
import Image from "next/image";
import React from "react";

const StartNavigation: React.FC<{ onLoginClick: () => void }> = (props) => {

    const loginClickHandler = (e: React.MouseEvent) => {
        e.preventDefault();

        props.onLoginClick();
    }

    return (
        <Navbar collapseOnSelect bg='dark' variant='dark' expand='lg' fixed='top'>
            <Container>
                <col className='col-1'/>
                <Navbar.Brand className='ml-5 text-light'>
                    <h4>
                        <Image src='/title-icon.png' alt='aid' width='30' height='30'/>
                        &nbsp;Doctor AID
                    </h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="navbarScroll">
                    <col className='col-8'/>
                    <Nav className='me-auto'>
                        <Nav.Link onClick={loginClickHandler}><b>Login</b></Nav.Link>
                        <col className='col-2'/>
                        <Nav.Link><b>About</b></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default StartNavigation;