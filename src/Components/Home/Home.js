import React from 'react'
import InputModal from '../ModalInput/InputModal';
import "./HomeStyle.css";
import ParticlesBg from 'particles-bg'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button';
import { Link } from 'react-router-dom'

function Home({ setShow,ChnageMain, ChangeStake  }) {
    return (
        <div id="HomePage">
             
            <div className="container-fluid home">
                <div className="overlaya"></div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 textdiv " >
                            <h1 className="homeHeading">Security Audit</h1>
                            <p className="textP">Identify and eliminate security
                                vulnerabilities using the most rigorous and thorough cybersecurity techniques.</p>
                         
                            <button className="btn btn-lg btnhome" onClick={() => setShow(true)} >
                                Being Your Audit
                            </button>

                        </div>

                       
                    </div>
                </div>
            </div>



            {/* Types of Audit */}

            <div className="container-fluid Audit " id="types">
                <div className="heading1">
                    <a className="headingtext" href="#types"><h2 className="Typesheading"> Types of Audit Services</h2></a>

                </div>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">

                            <img className="imgaudit" src="crowd funding1.png" alt="" width="125px" />
                            <h5 className="typetext">Crowdsale / Token Contracts</h5>
                            <p className="text">Recommended by top exchanges, we can audit smart contracts across every major
                                protocol and program language, including Solidity, JavaScript, C++, and Go.</p>


                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">

                            <img className="imgaudit" src="custom smart contract1.png" alt="" width="80px" />
                            <h5 className="typetext">Custom Smart Contracts</h5>
                            <p className="text">Worried about your smart contract security? Our team of experts can audit even the most complex smart contracts, from gambling contracts to consensus mechanisms.</p>


                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">

                            <img className="imgaudit" src="dapp1.png" alt="" width="125px" />
                            <h5 className="typetext">Wallets and DApps</h5>
                            <p className="text">Don't just stop hacks, prevent them from happening. Make sure that all funds are secured and get one of the most robust audits available.</p>


                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">

                            <img className="imgaudit" src="protocol1.png" alt="" width="100px" />
                            <h5 className="typetext">Blockchain Protocols</h5>
                            <p className="text">Ensure the security and proper implementation of your blockchain node configuration, consensus algorithm, contract virtual machine, and other key modules.</p>

                        </div>
                    </div>
                </div>
                <br /><br /><br />  
            </div>

            <div id="teampage"  ></div>
        </div>

    )
}

export default Home
