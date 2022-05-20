import React, { useState } from 'react'
import AuditProcess from './Components/Audit Process/AuditProcess'
import Partners from './Components/Client/Partners'
import Home from './Components/Home/Home'
import InputModal from './Components/ModalInput/InputModal'
import NavbarNav from './Components/Navbar/NavbarNav'
import OurTeam from './Components/OurTeamArb/OurTeam'
import QuestionsFile from './Components/QuestionsSection/QuestionsFile'
import SlideR from './Components/Sliderreport/SlideR'
import Pdf from './Components/PDF/Pdf'
import Footer from './Components/Footer/Footer'



export default function Home_page() {
    const [isChangeRoute, setIsChangeRoute] = useState("main")
    const [show, setShow] = useState(false)

    const ChnageMain = () => {
        setIsChangeRoute("main")
    }
    const ChangeStake = () => {
        setIsChangeRoute("Pdf")
    }

    const Main = () => {
        return (
            <>
                <NavbarNav setShow={setShow}  ChnageMain={ChnageMain} ChangeStake={ChangeStake} />
                <Home setShow={setShow} ChnageMain={ChnageMain} ChangeStake={ChangeStake} />
                <OurTeam />
                <Partners />
                <AuditProcess />
                {/* <SlideR /> */}
                <QuestionsFile setShow={setShow} />
                <InputModal show={show} setShow={setShow} />
                <Footer setShow={setShow}/>


            </>
        )
    }

    const PDF_here = () => {
        return (
            <>
                <NavbarNav ChnageMain={ChnageMain} ChangeStake={ChangeStake} />
               
                <Pdf/>
               

            </>
        )
    }

    if (isChangeRoute == "main") {
        return (
            <div className='App'>
                <Main />
            </div>
        )
    } else if (isChangeRoute == "Pdf") {
        return (
            <div className='App'>
                <PDF_here />
            </div>
        )
    }

}
