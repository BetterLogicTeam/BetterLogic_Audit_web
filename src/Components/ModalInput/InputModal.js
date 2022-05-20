import React, { useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import './modalstyle.css';
import ParticlesBg from 'particles-bg'
import { IoMdClose } from 'react-icons/io'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

function MyVerticallyCenteredModal(props) {
    const form = useRef();

    const submitForm = (e) => {
        e.preventDefault();
        props.onHide()
        emailjs.sendForm('service_5txejdu', 'template_puyj1yb', form.current, '_mYRV_0LsFvRasqaz')
            .then((result) => {
                console.log(result.text);
                toast.success("Email Sent Successfully!")
            }, (error) => {
                toast.error("Email Not Sent !", error)
                console.log(error.text);
            });

        // console.log(form.current);
    }
    return (
     
        <div  >
           
            <ToastContainer />
            <Modal
                className="formdiv mt-5"
                {...props}
                // size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header >
                    <Modal.Title >
                        <h3>Contact Us</h3>
                    </Modal.Title>
                    <IoMdClose

                        onClick={props.onHide}
                    />
                </Modal.Header>
                <form ref={form} onSubmit={submitForm} >
                    <Modal.Body>


                        <input type="text" name='subject' defaultValue="Audit report" className="form-control inputfield" hidden />

                        <div className="form-group">
                            <label className="textinput">Name<span className="required">*</span></label>
                            <input type="text" name='name' className="form-control inputfield" required />
                        </div>

                        <div className="form-group">
                            <label className="textinput">Email <span className="required">*</span></label>
                            <input type="email" name='email' className="form-control inputfield" required />
                        </div>

                        {/* <div className="form-group">
                            <label className="textinput">Compony name<span className="required">*</span></label>
                            <input type="text" name='Cname' className="form-control inputfield" />
                        </div> */}

                        <div className="form-group">
                            <label className="textinput">Contact Number / Telegram / WhatsApp / Others</label>
                            <input type="number" name='contact' className="form-control inputfield" />
                        </div>

                        <div className="form-group">
                            <label className="textinput">Share your source code</label><br />
                            <small className="smalltext">Please provide us with a link to your source code</small>
                            <input type="text" name='CLink' className="form-control inputfield" placeholder="e.g Etherscan, TronScan,Github etc" />
                        </div>

                        <div className="form-group">
                            <label className="textinput">Any additional information you'd like to share with us? Let's connect through chat!</label><br />
                            <small className="smalltext">Do you have a Telegram, WeChat, or other chat account? Any audit deadlines? Want to specify the files that need auditing?</small> <br />
                            <textarea name="message" id="" cols="30" rows="3" className="form-control inputfield"></textarea>
                        </div>

                        <div className="form-group">


                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-danger">Submit</button>
                        <button className="btn btn-secondary" onClick={props.onHide}>Close</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}

function InputModal({ show, setShow }) {

    return (
        <div >

            {/* <button variant="primary" onClick={() => setModalShow(true)} className="btn btn-lg btnhome">
            Being Your Audit
            </button> */}

            <MyVerticallyCenteredModal
                show={show}

                onHide={() => setShow(false)}
            />

        </div>
    )
}

export default InputModal