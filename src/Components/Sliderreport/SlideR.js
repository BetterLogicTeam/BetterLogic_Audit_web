import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './SliderStyle.css'

function SlideR() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="container uperdiv" >

            <Carousel activeIndex={index} onSelect={handleSelect} className="Mainiv ">
                <Carousel.Item >
                    <a href="" download>
                    <img
                    className="Slidepic"
                       
                        src="Captureauditr.PNG"
                        alt="First slide"
                    /></a>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                   <a href="" download>
                    <img
                        className="Slidepic"
                        src="Captureauditr.PNG"
                        alt="Second slide"
                    />
                    </a>

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                   <a href="" download>
                    <img
                         className="Slidepic"
                        src="Captureauditr.PNG"
                        alt="Third slide"
                    />
</a>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default SlideR
