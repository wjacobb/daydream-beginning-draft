import Image from "next/image";
import React from 'react'
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

function Header() {
    const { useState } = React;
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
    const router = useRouter();
    const home = () => {router.push('/')}
    const about = () => {router.push('/about')}
    const features = () => {router.push('/features')}
    const contact = () => {router.push('/contact')}
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
                <div className='navbar-burger burger hidden lg:flex items-center lg:space-x-4 xl:space-x-6 justify-end text-black'>
                    {/* Header tabs */} 
                    <p onClick={home} className='hidden md:inline cursor-pointer'>Home</p>
                    <p onClick={about} className='hidden md:inline cursor-pointer'>About Us</p>
                    <p onClick={features} className='hidden md:inline cursor-pointer'>Features</p>                        
                    <p onClick={contact} className='hidden md:inline cursor-pointer'>Contact</p>
                </div>
                {/* Hamburger Menu */}
                <div className="flex justify-end lg:hidden">
                    <button
                        className="flex flex-col h-10 w-10 border-2 border-black rounded justify-center items-center group"
                        onClick={() => setIsOpen(!isOpen)}
                        data-target='navbarToken'
                    >
                        <div
                            className={`${genericHamburgerLine} ${
                                isOpen
                                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                                    : "opacity-50 group-hover:opacity-100"
                            }`}
                        />
                        <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
                        <div
                            className={`${genericHamburgerLine} ${
                                isOpen
                                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                                    : "opacity-50 group-hover:opacity-100"
                            }`}
                        />
                    </button>
                </div>                            
            </div>  
        </header>
    );
}

export default Header;