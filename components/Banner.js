import Image from "next/image";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, {useState} from 'react';
import Calendar from "./Calendar";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

function Banner() {
    return (
        <div className='relative max-w-7xl mx-auto'>
            <Carousel 
            autoPlay 
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}>
                <div>
                    <img loading="lazy" layout="fill" src="https://images.turo.com/media/vehicle/images/XK4hR7ViR0q7f9xvcxJ4iQ.jpg"/>
                </div>
                <div>
                    <img loading="lazy" layout="fill" src="https://images.turo.com/media/vehicle/images/ABo9f8s3QLuBwkjCwE4PfQ.jpg"/>
                </div>
                <div>
                    <img loading="lazy" layout="fill" src="https://images.turo.com/media/vehicle/images/5N7Rk7ldRcCmjoLiVODbrg.jpg"/>
                </div>
            </Carousel>
        </div>
    );
}

export default Banner