import React from 'react';
import { useRouter } from "next/dist/client/router"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState } from "react";
import { 
   MenuIcon,
} from '@heroicons/react/solid'

function Burger () {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow]=useState(false);
  const router = useRouter();
  const home = () => {router.push('/')}
  const about = () => {router.push('/about')}
  const features = () => {router.push('/features')}
  const contact = () => {router.push('/contact')}
  const signIn = () => {router.push('/signIn')}

  return (
    <div className='flex justify-end'>
        <div className='flex justify-center'>
            {
              show?
              <div className="mx-2 px-2">
                <p onClick={home} className='cursor-pointer hover:bg-gray-200 px-2 rounded-sm'>Home</p>
                <p onClick={features} className='cursor-pointer hover:bg-gray-200 px-2 rounded-sm'>Features</p>                        
                <p onClick={contact} className='cursor-pointer hover:bg-gray-200 px-2 rounded-sm'>Contact</p>
                <hr/>
                <p onClick={signIn} className='cursor-pointer hover:bg-gray-200 px-2 rounded-sm'>Sign In</p>                  
            </div>:null
            }
          </div>

        <MenuIcon onClick={()=>setShow(!show)} className='h-6 cursor-pointer hover:animate-pulse'/>
    </div>
  )
}

export default Burger;