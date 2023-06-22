import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.png'
import logow from '../../assets/chw.png'
import {LiaAngleDownSolid } from "react-icons/lia"
import './NavBar.css'
const NavBar = () => {
    const expand = "lg"

    const navItem = <>
        <Nav.Link className='hoverColor' href="#action1"><p className='nabLinkmain'>Features <span className='navIconRoted fs-5'> <LiaAngleDownSolid/> </span></p></Nav.Link>
        <Nav.Link className='hoverColor' href="#action2"><span>Chondopedia <LiaAngleDownSolid/></span></Nav.Link>
        <Nav.Link className='hoverColor' href="#action2">Shop</Nav.Link>
        <Nav.Link className='hoverColor' href="#action2">Blogs</Nav.Link>
        <Nav.Link className='hoverColor' href="#action2"><span>Resources <LiaAngleDownSolid/></span></Nav.Link>
    </>
    return (
        <nav>
            <Navbar id='navMainContent'  expand="lg" className="bg-body-tertiary">
                <Container id='mainContentId' fluid>
                    <Navbar.Brand href="#">
                        <div className='d-flex gap-4'>
                            <div className='logoMain'>
                                <img className='logoImg' src={logo} alt="" />
                                <img className='logowImg' src={logow} alt="" />
                            </div>
                            <div className=" d-flex mt-4 ">
                                <Nav.Link className='minWithDisable' href="#action2 pb-2">Login</Nav.Link>
                                <Button className='minWithDisable btn ms-4'>Download</Button>
                            </div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <img className='logoImg' src={logo} alt="" />
                                <img src={logow} alt="" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center gap-4 flex-grow-1 pe-3">
                                {navItem}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <div className="d-flex">
                        <Nav.Link className='disableLogin' href="#action2">Login</Nav.Link>
                        <Button className='btn ms-4 disableLogin'>Download</Button>
                    </div>
                </Container>
            </Navbar>
        </nav>
    );
};

export default NavBar;