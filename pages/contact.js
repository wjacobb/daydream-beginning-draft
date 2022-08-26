import React,{useState} from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Header from "../components/Header";
import { 
    PhoneIcon,
 } from '@heroicons/react/solid';
import Indy from "../img/IMG_1668.jpg";

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
                    <p className='mt-4'>Here at Daydream we strive to offer more affordable and personal services. We hope you enjoy your rental as we strive to be flexible and helpful in any way we can provide. What started as a smaller operation is now starting to grow into a more collective agency.</p>
                </div>
            </section>
            <section className='max-w-2xl mx-auto'>
                <div className='grid sm:grid-cols-2'>
                    
                    <div className='mt-10 ml-16 mr-4'>
                        <Image src={Indy} className="object-cover h-40 w-40 rounded-lg"/>
                    </div>
                    <div className='ml-5 my-10 sm:ml-0 pt-5'>
                        <p><strong>Indy Heaton</strong></p>
                        <div className='flex'>
                            <PhoneIcon className='h-5 mt-1'/>
                            <p className='ml-2'>(801)-550-1734</p>
                        </div>
                        <p>indyheaton@gmail.com</p>
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