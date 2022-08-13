import Image from "next/image";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, {useState} from 'react';
import Calendar from "./Calendar";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

function Banner() {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => { setIsOpen(!isOpen) }

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
            {/* <Image
            alt='my-image'
            src={"https://images.turo.com/media/vehicle/images/XK4hR7ViR0q7f9xvcxJ4iQ.1440x700.jpg"}
            layout='fill'
            objectFit='cover'
            /> */}
            
            {/* <div>
                <Popup trigger={
                    <button className="text-white bg-blue-700 active:bg-blue-800 absolute top-1/3 left-1/4 px-4 py-1 rounded-md hover:scale-105 transition ease-in-out duration-300 hover:shadow-xl active:scale-100">
                        <div className="text-xl font-extrabold text-left">
                        <h1>&emsp;Date</h1>
                        </div>
                        <div>
                            <h2>When do you need a car?</h2>
                        </div>
                    </button>
                    }
                    position="bottom center">
                    <Calendar/>
                </Popup>
            </div> */}
            {/* <button className="text-white bg-blue-700 active:bg-blue-800 absolute top-1/3 left-1/4 px-4 py-1 rounded-md hover:scale-105 transition ease-in-out duration-300 hover:shadow-xl active:scale-100">
                <div className="text-xl font-extrabold text-left">
                    <h1>&emsp;Date</h1>
                </div>
                <div>
                    <h2>When do you need a car?</h2>
                </div>
            </button>    */}
        </div>
    );
}

export default Banner