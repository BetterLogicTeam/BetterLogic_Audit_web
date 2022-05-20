import React from 'react'
import './AuditStyle.css'

function AuditProcess() {
    return (
        <div>
            <div className="container-fluid " id="Auditprocessdiv">
                <div className="container">
                    <div className="Auditdiv">
                        <a className="LinkAudit" href="#Auditprocessdiv"><h3>Audit Process</h3></a>
                        <p className="Ptag mt-3 newclassP">Our audit is a simple 5-step process:</p>
                    </div>
                    {/* <div className="divw" style={{width:'70vw'}}>
                    <div className=" Phase">
                    <p >PHASE 1</p>
                    <p >PHASE 1</p>
                    <p >PHASE 1</p>
                    <p >PHASE 1</p>
                    <p >PHASE 1</p>
                    </div>
                    </div> */}

                    <div className="row Phase">
                        <div className="col-sm-12 ">

                            <img src="P1.png" width="30%" />
                            <p className="newclassP" >PHASE 1</p>
                            <p className="PhaseP"> Review source code</p>
                        </div>
                        <div className="col-sm-12 ">
                            <img src="P2.png" width="30%" />
                            <p className="newclassP" >PHASE 2</p>
                            <p className="PhaseP">  Send custom quote</p>
                        </div>
                        <div className="col-sm-12 ">
                            <img src="P3.png" width="30%" />
                            <p className="newclassP">PHASE 3</p>
                            <p className="PhaseP">Manual Code Review & Vulnerability Analysis</p>
                        </div>
                        <div className="col-sm-12 ">
                            <img src="P4.png" width="30%" />
                            <p className="newclassP" >PHASE 4</p>
                            <p className="PhaseP" >  Suggest remediations</p>
                        </div>
                        <div className="col-sm-12 ">
                            <img src="P5.png" width="30%" />
                            <p className="newclassP">PHASE 5</p>
                            <p className="PhaseP "> Complete audit</p>
                        </div>
                    </div>

                    <div className="container ">
                        <div className="row auditpic">
                            <div className="col">
                                <p className="newclassP">PHASE 1</p>
                            </div>
                            <div className="col">
                                <p className="newclassP">PHASE 2</p>
                            </div>
                            <div className="col">
                                <p className="newclassP">PHASE 3</p>
                            </div>
                            <div className="col">
                                <p className="newclassP">PHASE 4</p>
                            </div>
                            <div className="col">
                                <p className="newclassP">PHASE 5</p>
                            </div>

                        </div>
                        <div className="row Phase2 auditpic">
                            <div className="col">
                                Review Source Code
                            </div>
                            <div className="col">
                                Send Custom Quote
                            </div>
                            <div className="col">
                           Manual Code Review & Vulnerability Analysis
                            </div>
                            <div className="col">
                            Suggest Solutions
                            </div>
                            <div className="col">
                            Complete Audit
                            </div>
                        </div>
                        <div className="auditpic">
                            <img src="audit-process.png" alt="" width="100%" style={{marginTop:'-10rem',marginRight:'2rem'}} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AuditProcess
