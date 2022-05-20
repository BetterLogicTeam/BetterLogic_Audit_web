import React from 'react'
import './TeamStyle.css';

function OurTeam() {
    return (
        <div>

            <div className="container-fluid mt-5" >
                <div className="container">


                    <div className="CEOdiv " style={{ marginTop: '10rem' }}>

                        <div className="team-member " >
                            <h1 >Our Team</h1>
                            <div className=" imgg hide-up" style={{ opacity: 1 }}>
                                <img className="resp circle imgchange " src="https://codify.pk/public/assets/images/team/team-shape.png" alt="" style={{ position: 'relative' }} />
                                <div className="">
                                    <a target="_blank" href="https://www.linkedin.com/in/umar-farooq-710068205/">  <img className="img2 " src="BlockChain.jpeg" alt="" style={{ borderRadius: '50%', marginTop: 'rem', position: 'relative' }} /></a>
                                </div>
                            </div>
                            <div className="names">
                            <h4 className="Headingh1" >Umar Farooq</h4>
                                <h6 class="leads_n hide-up" > CEO &amp; Senior Developer  </h6>
                            </div>
                        </div>
                    </div>

                    <div className="row  mt-5">
                        <div className="col-lg-6 mt-5">
                            <div className="JunierDep">
                                <div className=" imgg hide-up" style={{ opacity: 1 }}>
                                    <img className=" circle resp" src="https://codify.pk/public/assets/images/team/team-shape.png" alt="" style={{ position: 'relative' }} />
                                    <div className="">
                                        <a target="_blank" href="https://www.linkedin.com/in/muhammad-rehman-285522215/"> <img className="img" src="Abd.jpeg" alt="" style={{ borderRadius: '50%', marginTop: '', position: 'relative' }} /></a>
                                    </div>
                                </div>
                                <div className="names">
                                <h4 className="Headingh1" >Abdul Rehman</h4>
                                    <h6 class="leads_n hide-up" >Senior Block-Chain Developer &amp; Auditor</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5">
                            <div className="JunierDep">
                                <div className=" imgg hide-up" style={{ opacity: 1 }}>
                                    <img className=" circle resp" src="https://codify.pk/public/assets/images/team/team-shape.png" alt="" style={{ position: 'relative' }} />
                                    <div className="">
                                        <a target="_blank" href="https://www.linkedin.com/in/muhammad-tayyab-349b56114">   <img className="img" src="WhatsApp Image 2022-04-06 at 3.44.14 PM.jpeg" alt="" style={{ borderRadius: '50%', marginTop: 'rem', position: 'relative' }} /></a>
                                    </div>
                                </div>
                                <div className="names">
                                    <h4 className="Headingh1" >Muhammad Tayyab</h4>
                                    <h6 class="leads_n hide-up" >Full Stack Developer &amp; Auditor</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="Partners"></div>

        </div>
    )
}

export default OurTeam
