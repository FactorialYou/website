
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGES } from '../configs/pages';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {

    const location = useLocation();

    return (
        <header id="header" class="fixed-top header-scrolled">
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/" className="logo">Factorial You</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" activeKey={location.pathname}>
                            {PAGES.filter(page => page.path === "/").map(page => <Nav.Link href={page.path}>{page.title}</Nav.Link>)}
                            {PAGES.filter(page => page.parent === "Home").map(page => <Nav.Link href={page.path}>{page.title}</Nav.Link>)}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
};

export default Header;