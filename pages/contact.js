import React,{useState} from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Header from "../components/Header";
import { 
    PhoneIcon,
 } from '@heroicons/react/solid'

function Contact() {
    return(
        <div>
            <Head>
                <title>DayDream | Contact Us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <section className='max-w-2xl mx-auto'>
                <div className='mt-12 mx-10'>
                    <h2 className='text-3xl'><strong>About Us!</strong></h2>
                    <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </section>
            <section className='max-w-2xl mx-auto'>
                <div className='grid sm:grid-cols-2'>
                    <div className='mt-10 ml-16'>
                        <img src="https://4.bp.blogspot.com/-LoC2ai1MdQU/WWqJUJJAbOI/AAAAAAAADcc/oz46ezACjVUhrZJIYxEn_uxLmOpakTX-gCLcBGAs/s1600/Indiana%2BJones%2B%2528I%2529.jpg" className="object-cover h-40 w-40 rounded-full"/>
                    </div>
                    <div className='ml-5 my-10 sm:ml-0 pt-5'>
                        <p><strong>Indy Heaton</strong></p>
                        <div className='flex'>
                            <PhoneIcon className='h-5 mt-1'/>
                            <p className='ml-2'>(123)-111-2222</p>
                        </div>
                        <p>fakeindyemail@gmail.com</p>
                        <p>175 W 2700 S Salt Lake City, UT 84115</p>
                        <p className='sm:hidden'>Find us using Google Maps <a href="https://www.google.com/maps/place/175+W+2700+S,+South+Salt+Lake,+UT+84115/@40.7121936,-111.9051829,15z/data=!3m1!4b1!4m5!3m4!1s0x87528ae76d662779:0x744b47e707ced439!8m2!3d40.7121939!4d-111.8964496" className=' text-blue-500'>here</a>.</p>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.264481326594!2d-111.89863828475842!3d40.71219387933191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528ae76d662779%3A0x744b47e707ced439!2s175%20W%202700%20S%2C%20South%20Salt%20Lake%2C%20UT%2084115!5e0!3m2!1sen!2sus!4v1658933907376!5m2!1sen!2sus" width="570" height="450" className="hidden sm:grid border-0 my-10 mx-10" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>
    )
}
export default Contact;