import Image from "next/image";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, {useState } from 'react';
import Calendar from "./Calendar";


function Banner() {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => { setIsOpen(!isOpen) }

    return (
        <div className='relative h-[300px] sm:h-[400] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
            <Image
            alt='my-image'
            src={"https://images.turo.com/media/vehicle/images/XK4hR7ViR0q7f9xvcxJ4iQ.1440x700.jpg"}
            layout='fill'
            objectFit='cover'
            />
            
            <div>
                <Popup trigger={
                    <button className="text-white bg-blue-700 active:bg-blue-800 absolute top-1/3 left-1/4 px-4 py-1 rounded-md hover:scale-105 transition ease-in-out duration-300 hover:shadow-xl active:scale-100">
                        <div className="text-xl font-extrabold text-left">
                        <h1>&emsp;Date</h1>
                        </div>
                        <div>
                            <h2>When do you need a car?</h2>
                        </div>
                    </button>}
                    position="bottom center">
                    <Calendar/>
                </Popup>
            </div>
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