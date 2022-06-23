import React from 'react';
import { useRouter } from "next/dist/client/router"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState } from "react";
import { 
   MenuIcon,
} from '@heroicons/react/solid'

function Burger () {
  const { useState } = React;
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const router = useRouter();
  const home = () => {router.push('/')}
  const about = () => {router.push('/about')}
  const features = () => {router.push('/features')}
  const contact = () => {router.push('/contact')}
  const signIn = () => {router.push('/signIn')}
  
  return (
    <div className='flex justify-end'>
        <MenuIcon className='h-6 cursor-pointer hover:animate-pulse'>

        </MenuIcon>
      {/* <Popup trigger={
        <button
        className="flex max-w-xs bg- flex-col h-10 w-10 border-2 border-black rounded justify-center items-center group container"
        onClick={() => setIsOpen(!isOpen)}
        data-target='navbarToken'
        position="left center">
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
    }>
        <div className="mx-2 px-2">
            <p onClick={home} className='cursor-pointer hover:bg-gray-200'>Home</p>
            <p onClick={about} className='cursor-pointer hover:bg-gray-200'>About Us</p>
            <p onClick={features} className='cursor-pointer hover:bg-gray-200'>Features</p>                        
            <p onClick={contact} className='cursor-pointer hover:bg-gray-200'>Contact</p>
            <hr/>
            <p onClick={signIn} className='cursor-pointer hover:bg-gray-200'>Sign In</p>                  
        </div>
    </Popup> */}
    </div>
  )
}


export default Burger;