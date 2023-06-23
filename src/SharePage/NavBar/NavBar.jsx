import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.png'
import logow from '../../assets/chw.png'
import { LiaAngleDownSolid } from "react-icons/lia"
import './NavBar.css'
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    const expand = "lg"

    const navItem = <>
        <NavLink className='hoverColor' to="/features">Features
            <span className='navIconRoted fs-5'> <LiaAngleDownSolid /> </span></NavLink>
        <Nav.Link className='hoverColor'><NavLink><span>Chondopedia <LiaAngleDownSolid /></span>
        </NavLink></Nav.Link>
        <Nav.Link className='hoverColor'><NavLink to='/shop'>Shop</NavLink></Nav.Link>
        <Nav.Link className='hoverColor' ><NavLink>Blogs</NavLink></Nav.Link>
        <Nav.Link className='hoverColor'><NavLink><span>Resources <LiaAngleDownSolid />
        </span></NavLink></Nav.Link>
    </>
    return (
        <nav>
            <Navbar id='navMainContent' expand="lg" className="bg-body-tertiary">
                <Container id='mainContentId' fluid>
                    <Navbar.Brand href="#">
                        <div className='d-flex gap-4'>
                            <div className='logoMain'>
                                <img className='logoImg' src={logo} alt="" />
                                <img className='logowImg' src={logow} alt="" />
                            </div>
                            <div className=" d-flex mt-4 ">
                                <Nav.Link className='minWithDisable' href="#action2 pb-2">Login</Nav.Link>
                                <button className='minWithDisable downloadAppBtn'>Download App</button>
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
                            <Nav className="navItemfont justify-content-center gap-4 flex-grow-1 pe-3">
                                {navItem}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <div className="d-flex">
                        <button className='downloadAppBtn'>Download App</button>
                    </div>
                </Container>
            </Navbar>
        </nav>
    );
};

export default NavBar;