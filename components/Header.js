import Image from "next/image";
import React from 'react';
import { 
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
    SearchIcon,
} from '@heroicons/react/solid'
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useUser } from '@auth0/nextjs-auth0';
import Burger from './Burger.js'

function Header() {
    const { useState } = React;
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
    const router = useRouter();
    const home = () => {router.push('/')}
    const about = () => {router.push('/about')}
    const features = () => {router.push('/features')}
    const contact = () => {router.push('/contact')}
    const signIn = () => {router.push('/signIn')}
    // const signOut = () => {router.push('/signOut')}
    return (
        <header className="sticky top-0 z-50 grid grid-cols-2 lg:grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* Left */}
            <div>
                <h1 className="font-bold text-xl">Daydream Car Company</h1>
                <h2 className="hidden md:flex">&emsp;&emsp;Car rental you'll dream about</h2>
            </div>
            {/* Middle */}
            <div className='hidden relative lg:grid h-10 w-20 my-auto'>
                <a href="https://www.youtube.com/watch?v=uZ57I2A3j5Y">
                    <Image src="https://images.turo.com/media/vehicle/images/ABo9f8s3QLuBwkjCwE4PfQ.720x350.jpg"
                        layout="fill"
                        objectFit="contain" 
                        objectPosition="left"
                        className="cursor-pointer"
                    />
                </a>
            </div>            
            {/* Right */}
            <div className="my-auto">
                {/* Regular tabs */}
                <div className='navbar-burger burger hidden lg:flex items-center justify-end text-black'>
                    {/* Header tabs */} 
                    <button onClick={home} className='hidden md:inline cursor-pointer hover:underline lg:px-2 rounded-md py-1'>Home</button>
                    <button onClick={about} className='hidden md:inline cursor-pointer hover:underline lg:px-2 rounded-md py-1'>About Us</button>
                    <button onClick={features} className='hidden md:inline cursor-pointer hover:underline lg:px-2 rounded-md py-1'>Features</button>                        
                    <button onClick={contact} className='hidden md:inline cursor-pointer hover:underline lg:px-2 rounded-md py-1'>Contact</button>
                    <button onClick={signIn} className='hidden md:inline cursor-pointer hover:underline lg:px-2 rounded-md py-1'>Sign In</button>                  
                </div>
                {/* Hamburger Menu */}
                <div className="lg:hidden">
                    <Burger/>
                </div>
            </div>  
        </header>
    );
}

export default Header;