import React from 'react'
import './Navbarstyle.css'

import { Container, Navbar, Nav } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button';
import { Link } from 'react-router-dom'


function NavbarNav({ setShow, ChnageMain, ChangeStake }) {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="" className="navbgcolor">
                <div className="overlaya"></div>

                <Container className="conta">
                    <Link to="/" className='TextdecorationNFT145'>
                        <a class="navbar-brand" href="#">
                            <div className='First_Col'>
                                <img src='block_solutions-removebg-preview.png' width="60px" className='me-2' />
                                <div className='seond_col'>
                                    <span className="name_first">BLOCK</span>  <br />
                                    <small className="name_second me-auto">solutions </small>

                                </div>
                            </div>

                        </a>

                    </Link>
                    <Navbar.Toggle className="navtoggle"  > <img src="navbtn.png" alt="" width='30px' aria-controls="responsive-navbar-nav" className="logonav" /> </Navbar.Toggle>
                    {/* <Navbar.Toggle className='bg-white' aria-controls="responsive-navbar-nav" /> */}

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto " style={{ marginLeft: 'auto' }}>
                            <Nav.Link href="#HomePage" className="navbartext" onClick={() => { ChnageMain(); window.scrollTo(0, 0); }} >Home</Nav.Link>

                            <Nav.Link href="#teampage" className="navbartext" onClick={() => { ChnageMain(); window.scrollTo(0, 0); }}>Our Team</Nav.Link>

                            <Nav.Link href="#Partners" className="navbartext" onClick={() => { ChnageMain(); window.scrollTo(0, 0); }}>Partner</Nav.Link>
                            <Nav.Link href="#Partners" className="navbartext" onClick={() => { ChangeStake(); window.scrollTo(0, 0); }} >Work</Nav.Link>
                            <Nav.Link href="#" className="navbartext"><Button className="btn navbarBTN"
                                onClick={() => setShow(true)}
                            >Contact Us</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>





        </div>
    )
}

export default NavbarNav
