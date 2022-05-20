import React from 'react'
import './QuestionsStyle.css'
import { ImOffice } from 'react-icons/im';
import { BsFillTelephoneFill, BsWhatsapp, BsLinkedin, BsFacebook } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { CgMail, CgWebsite } from 'react-icons/cg'


function QuestionsFile({ setShow }) {
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="QuestionsHeading" >
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <h1 className="QuestionH" >Frequently Asked Questions</h1>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="ButtonDiv btninres">
                                    <button className="btn bt-lg QButton" onClick={() => setShow(true)}>Contact Us</button>

                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <h4 className="Qheading">What is Formal Verification, and why is it important?</h4>
                                <p className="QTextP">Formal Verification mathematically proves that code will work as intended, computing all possible scenarios. With an estimated $1B of assets stolen in 2018, this level of rigor is the only way to objectively show immunity against some of the most critical and frequent vulnerabilities.</p>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-5">
                                <h4 className="Qheading">What do your audits include?</h4>
                                <p className="QTextP">At Block solutions, our audits include rigorous, automated Formal Verification, static analysis, and manual review. We expand upon traditional testing methods to provide the most advanced security audits in the space.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <h4 className="Qheading">Do cryptocurrency exchanges accept your audit report?</h4>
                                <p className="QTextP">Absolutely. Because our audit reports are comprehensive, transparent, and objective, we’re actually recommended by the top exchanges, including Binance, Huobi, OKEx, and Bitmart. In fact, we haven’t met any exchanges that did not accept our audit report, given our analysis is
                                    fundamentally driven by math and can be checked by anybody.</p>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-5">
                                <h4 className="Qheading">How long does it take to complete an audit?</h4>
                                <p className="QTextP">The length of an audit depends on many factors, including the complexity and the length of the source code. We use patented and proven technology to complete our audits as quickly, and thoroughly, as possible, which has allowed us to complete most of our audits in a manner of days, not weeks. Some of our
                                    audits have been able to be completed within 48 hours.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <h4 className="Qheading">How much does an audit cost?</h4>
                                <p className="QTextP">The cost of an audit is customized for each project. We offer affordable pricing because we know that security is important, and you shouldn’t ever have to settle for a lower level of security. Because every project is different, you can request
                                    a free quote to find out the cost of your audit.</p>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
            <div className="container-fluid  FotterUper">
                <br /><br />
                <div className="container">
                    <div className="row mt-5 footertextcheck"  >
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
                            <h3>Don't wait until it's too late.</h3>
                            <p className="footeruperP">Request your free quote and secure your smart contracts today!</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="ButtonDiv">
                                <button className="btn bt-lg QButton" onClick={() => setShow(true)} >Request a Quote</button>

                            </div>
                        </div>
                    </div>

                </div>
                <br /><br />
            </div>














           


        </div>


    )
}

export default QuestionsFile
