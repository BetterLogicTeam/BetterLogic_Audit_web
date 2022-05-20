import React from 'react'
import './Report.css'

function AuditReport() {
    return (
        <div><br />
            <div className="container-fluid ReportAudit" >
                <br />
                <div className="container WorkContainer">
                    <div className="row ReportDiv1 ">
                        <div className="col-lg-6 work1">
                            <h3>How Does It Work?</h3>
                        </div>
                        <div className="col-lg-6 textSection" >
                            <p>Our security audit platform evaluates smart contracts for vulnerabilities and certifies
                                their behavior with respect to a custom function specification:</p>
                        </div>
                    </div>
                </div>



                <div className="container Showinfull " >
                    <div className="smarttextdiv mt-5">
                        <div className="row ">
                            <div className="col-lg-1.5">
                                <h5 className="heading">Smart Contract</h5>
                                <p className="textSmartP mb-5">Source code and deployment scripts</p>
                                <br />
                                <h5 className=" heading mt-2">Specification</h5>
                                <p className="textSmartP">Formalizes the intended behavior</p>
                            </div>
                            <div className="col-lg-2 ">
                                <img src="audit-workflow1.png" width="180px" />
                            </div>
                            <div className="col-lg-2.5">
                                <p className="heading" > Formal Verification Engine</p>
                                <img className="" src="audit-workflow2.png" />
                            </div>
                            <div className="col-lg-0.5 " style={{ marginTop: '5rem' }}>
                                <img src="audit-workflow-arrow.png" />
                            </div>
                            <div className="col-lg-2" >
                                <h5 className="heading mb-4 mt-2 text-center">Expert Review</h5>

                                <img src="audit-workflow3.png" />
                                <p className="textSmartP text-center">Our team includes engineers with experience
                                    from different platforms.</p>

                            </div>
                            <div className="col-lg-0" style={{ marginTop:'5rem',marginRight:'2rem' }}>
                                <img src="audit-workflow-arrow.png" />
                            </div>
                            <div className="col-lg-0.5" style={{ marginTop: '4rem' }}>
                                <img src="audit-workflow4.png" />
                            </div>
                            <div className="col" style={{ marginTop: '4rem' }}>
                                <h5 className="heading">Security Report</h5>
                                <p className="textSmartP">Lists security vulnerabilities and certified/violated requirements</p>
                            </div>
                        </div>
                    </div>
                </div>






                {/* ------------------------------------ */}


                <div className="container-fluid mt-5 resSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-3 col-sm-2 ">

                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="flotdiv">
                                    <h5 className=" heading mt-2">Specification</h5>
                                    <p className="textSmartP">Formalizes the intended behavior</p>

                                </div>


                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                                <h5 className="heading text-left">Smart Contract</h5>
                                <p className="textSmartP ">Source code and deployment scripts</p>


                            </div>
                        </div>
                        <div>
                            <img src="audit-workflow12-v.png" style={{ marginLeft: '-1rem' }} alt="" />
                            <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#e5453d' }} > Formal Verification Engine</p>
                            <img className="" src="audit-workflow2.png" /><br />
                            <img src="audit-workflow-arrow 12.png" alt="" className="ArrowRotate mt-4" />
                            <h5 className="heading mt-4  text-center">Expert Review</h5>
                            <img src="audit-workflow3.png" />
                            <p className="textSmartP text-center mb-5">Our team includes engineers with experience
                                from Google, Microsoft, Oracle, and Facebook.</p><br />
                            <img src="audit-workflow-arrow 12.png" alt="" className="ArrowRotate " /><br />


                            <img src="audit-workflow4.png" className="" />

                            <div style={{marginTop:'2rem'}}>

                                <h5 className="text-center" style={{ fontSize: '12px', fontWeight: 'bold    ' }}>Security Report</h5>
                                <p className="text-center" style={{ fontSize: '12px'}}>Lists security vulnerabilities and certified/violated requirements</p>
                            </div>



                        </div>


                    </div>
                </div>




                {/* ---------------------------------------------------------------------- */}
                <div className="container" >
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 col-12">
                        <br /> <br />
                            <div className="reportTextdiv mt-5 ">
                                <h3 className="RepHeading"> What’s in the audit report?</h3>
                                <p className="RepText">Our audit reports are custom, thorough, and transparent. The report will contain the details of any identified vulnerabilities and classify them by severity (Critical, Major, Medium, Low, and Informational), along with suggested remediation. Diagrams are included to provide visualized insights about
                                    the project and help you understand the source of identified vulnerabilities.</p>
                                <p className="RepText">With every successful audit, we’ll provide you with a listing on the Block Solutions Security Leaderboard that is shared publicly with the entire blockchain community! The Leaderboard contains the details of projects alongside their audit reports,
                                    as well as the community’s security sentiment of the project.</p>
                            </div>

                        </div>
                        <div className="col-lg-6 col-sm-12 col-12 mb-5">
                            <div className="reportImage">
                            <a href="Captureauditr.png" download>

                                <img src="Captureauditr.png" alt="" width="65%" height=""   />
                            </a>
                            </div>
                        </div><br /><br />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AuditReport
