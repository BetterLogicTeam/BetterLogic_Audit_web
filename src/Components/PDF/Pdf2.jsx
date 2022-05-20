import React from 'react'
import './Documentsstyle.css'
import { BiDownload } from 'react-icons/bi'
import { Link } from 'react-router-dom'


export default function Pdf2() {


    let PDF_data = [
        {
            img_src: 'a.jpeg',
            pdf_name: 'WnDGameTG ERC721',
            pdf_src: 'WnDGameTG ERC721 Token Smart Contract Code Review and Security Analysis Report.pdf'
        },
        {
            img_src: 'b.jpeg',
            pdf_name: 'BACKGUCOIN BEP20',
            pdf_src: 'BACKGUCOIN BEP20 Token Smart Contract Code Review and Security Analysis Report (1).pdf'
        },
        {
            img_src: 'c.jpeg',
            pdf_name: 'Bamboo ERC20',
            pdf_src: 'Bamboo ERC20 Token Smart Contract Code Review and Security Analysis Report (2) (1).pdf'
        },
        {
            img_src: 'd.jpeg',
            pdf_name: 'NIL ERC20 ',
            pdf_src: 'NIL ERC20 Token Smart Contract Code Review and Security Analysis Report (1).pdf'
        },

    ]

    return (
        <div>

            <div className="container">



                {/* <p className='headingdivPsection '  >
                    Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors.</p>
 */}



                <div class="">
                    <div class="nk-block">
                        <div class="row gutter-vr-50px rowdivdoc">
                            <div class="col-sm-6 col-lg-3 " >
                                <div class="doc animated fadeInUp" data-animate="fadeInUp" data-delay="0.3" style={{ visibility: "visible", animationDelay: "0.3s" }}  >
                                    <Link to="/first" >
                                        <div class="doc-photo doc-shape doc-shape-a" >
                                            <img src="wv.jpeg" alt="" style={{width:"500px",height:"200px"}} />

                                        </div>
                                    </Link>
                                    <div class="doc-text">
                                        <h5 class="doc-title title-sm">WE FINANCE BEP20 <small>(2021)</small></h5>

                                        <a class="doc-download" download href="WE FINANCE BEP20 Smart Contract Code Review and Security Analysis Report.pdf">
                                            <em class="ti ti-import"><BiDownload /></em>
                                        </a>
                                        {/* <div class="doc-lang">ENGLISH</div> */}
                                    </div>
                                </div>

                            </div>
                            <div class="col-sm-6 col-lg-3 ">
                                <div class="doc animated fadeInUp" data-animate="fadeInUp" data-delay="0.4" style={{ visibility: "visible", animationDelay: "0.4s" }}>
                                 
                                    <Link to="/second" >
                                        <div class="doc-photo doc-shape doc-shape-b">
                                            <img src="trockit.jpeg" alt="" style={{width:"500px",height:"200px"}} />
                                        </div>
                                    </Link>
                              

                                    <div class="doc-text">
                                        <h5 class="doc-title title-sm">Trockit Smart Contract <small>(2021)</small></h5>
                                        <a class="doc-download" download href="Trockit Smart Contract Code Review and Security Analysis Report V2.pdf">
                                            <em class="ti ti-import"><BiDownload /></em>
                                        </a>
                                        {/* <div class="doc-lang">ENGLISH</div> */}
                                    </div>

                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3 ">
                                <div class="doc animated fadeInUp" data-animate="fadeInUp" data-delay="0.5" style={{ visibility: "visible", animationDelay: "0.5s" }}>
                                    <Link to="/Third">
                                        <div class="doc-photo doc-shape doc-shape-c">
                                            <img src="provision tree.jpeg" alt="" style={{width:"500px",height:"200px"}} />
                                        </div>
                                    </Link>
                                    <div class="doc-text">
                                        <h5 class="doc-title title-sm">Provision Tree BEP20<small>(2021)</small></h5>
                                        <a class="doc-download" download href="Provision Tree BEP20 Token smart Contract Code Review and Security Analysis Report.pdf">
                                            <em class="ti ti-import"><BiDownload /></em>
                                        </a>
                                        {/* <div class="doc-lang">ENGLISH</div> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3 ">
                                <div class="doc animated fadeInUp" data-animate="fadeInUp" data-delay="0.6" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                                    <Link to="/Fourth">                                    <div class="doc-photo doc-shape doc-shape-d">
                                        <img src="phuket.jpeg" alt="" style={{width:"500px",height:"200px"}} />
                                    </div>
                                    </Link>
                              

                                    <div class="doc-text">
                                        <h5 class="doc-title title-sm">Phuket Holiday Coin  <small>(2021)</small></h5>
                                        <a class="doc-download" download href="Phuket Holiday Coin Pay BEP20 Smart Contract Code Review and Security Analysis Report.pdf">
                                            <em class="ti ti-import"><BiDownload /></em>
                                        </a>
                                        {/* <div class="doc-lang">ENGLISH</div> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3 ">
                                <div class="doc animated fadeInUp" data-animate="fadeInUp" data-delay="0.6" style={{ visibility: "visible", animationDelay: "0.3s" }}>
                                    <Link to="/fifth">                                    <div class="doc-photo doc-shape doc-shape-d">
                                        <img src="bullverse.jpeg" alt="" style={{width:"500px",height:"200px"}} />
                                    </div>
                                    </Link>
                                

                                    <div class="doc-text">
                                        <h5 class="doc-title title-sm">Bullverse BEP20  <small>(2021)</small></h5>
                                        <a class="doc-download" download href="Bullverse BEP20 Token smart Contract Code Review and Security Analysis Report.pdf">
                                            <em class="ti ti-import"><BiDownload /></em>
                                        </a>
                                        {/* <div class="doc-lang">ENGLISH</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />


            </div>



        </div>
    )
}
