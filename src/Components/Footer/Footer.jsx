import React from 'react'
import './Footer.css'
import { ImOffice } from 'react-icons/im';
import { BsFillTelephoneFill, BsWhatsapp, BsLinkedin, BsFacebook } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai';

import { FaFacebookF,FaTelegramPlane} from 'react-icons/fa';
import { CgMail, CgWebsite } from 'react-icons/cg'
import ReactWhatsapp from 'react-whatsapp';

export default function Footer({ setShow }) {
    return (
        <div>

           


            <div className="container-fluid Footer">
                <br />
                <div className="container ">
                   
                    <div className="row">
                        <div className="col-lg-2" style={{ display: 'flex' }}>
                            <div className="footerimg mt-2">
                            <div className='First_Col'>
                                <img src='block_solutions-removebg-preview.png' width="70px" className='me-5' />
                                <div className='seond_col'>
                                    <span className="name_first mb-1">BLOCK</span>  <br />
                                    <small className="name_second me-auto ">solutions </small>

                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row  " >
                        <div className="col-lg-2"></div>
                        <div className="col-lg-6 mt-3 contactoffice">
                            <h3 className="text-white text-left mb-4 mt-2">Company</h3>
                            <div className="footer_secondText">
                                <div className="span_group">
                                    <span style={{ fontSize: '20px', marginTop: '-1rem', color: 'rgba(255, 255, 255, 0.561)' }}><ImOffice /> </span><p className="ml-3 "> Office 1,Model Town Q Block,Lahore </p>
                                </div>

                                <div className="span_group">
                                    <span style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.561)' }}><BsFillTelephoneFill /></span><h6 className="ml-3"> <a href="tel: +92 334 0691173" style={{  color: '#fff' }}> +92 334 0691173 </a> </h6>

                                </div>


                            </div>
                        </div>


                        <div className="col-lg-4 ">
                            <h3 className="text-white text-left mb-4 mt-4">Socials</h3>
                            <div className="footer_secondText">
                           
                            <ReactWhatsapp number="+92 334 0691173" message="Hi! I'm interested in one of your products at  Block SOLUTIONS" className="whatsaapherebg   mt-4" >
                            <a className="Atagedec" target="_blank" href="#">
                                  <div className="span_group">
                                    <span style={{ fontSize: '20px', color: 'rgba(255, 255, 255, 0.561)' }} ><BsWhatsapp /></span><h6 className="ml-3" style={{  color: 'rgba(255, 255, 255, 0.561)' }}> +92 334 0691173  </h6>

                                </div>
                                </a>

                              </ReactWhatsapp>
                              
                               
                                {/* <a className="Atagedec" target="_blank" href="#">
                                    <div className="span_group">
                                        <span style={{ fontSize: '25px' }}><CgWebsite /></span> <h6 className="ml-3 "> www.BetterLogics.com </h6>

                                    </div>
                                </a> */}
                                <a className="Atagedec" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=blocksolutionslhr@gmail.com">
                                    <div className="span_group">
                                        <span style={{ fontSize: '25px' }}><CgMail /> </span> <h6 className="ml-3 ">blocksolutionslhr@gmail.com </h6>
                                    </div>
                                </a>

                                <a className="Atagedec  " target="_blank" href="https://www.linkedin.com/in/block-solutions-374710238/"><div className="span_group">
                                    <span style={{ fontSize: '22px' }}> <BsLinkedin /></span> <h6 className="ml-3 "> LinkedIn </h6>
                                </div></a>
                                <a className="Atagedec  " target="_blank" href="https://t.me/Ethereum_007"><div className="span_group">
                                    <span style={{ fontSize: '22px' }}> <FaTelegramPlane /></span> <h6 className="ml-3 "> Telegram </h6>
                                </div></a>

                            </div>

                        </div>


                    </div>
                    <div className="row">
                        <br /><br /><br />
                    </div>
                </div>
            </div>


        </div>
    )
}
