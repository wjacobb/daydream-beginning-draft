import React,{useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from "../components/Header";
import Banner from "../components/Banner";
import LargeCard from "../components/LargeCard";
import Price from "../components/Price";
import CarCards from "../components/CarCards";
import Calendar from "../components/Calendar";
import Insurance from "../components/Insurance";
import { Cars } from "../car-list.js";

// Get our props here.
export const getStaticProps = async () => {
  return {
    props: {
      carListData: Cars,
    },
  }
}

export default function Home({ carListData }) {
  const [show, setShow]=useState(true)
  
  return (
    <div>
      <Head>
        <title>DayDream Car Co.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <section>
        <Banner />
        {/* <div className='max-w-md justify-center mx-auto pb-8'>
          <Calendar />
        </div> */}
      </section>
      
      <main>
        
      
      <div className='max-w-7xl mx-auto px-8 sm:px-16 pb-8'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold py-4'>Cars Here!</h2>
            {/* Logic will probably take place here */}
            <div className='flex scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-200 scrollbar-thumb-rounded-lg py-1 -ml-3 space-x-2'>
              {carListData?.map(carData => (
                <CarCards key={carData.name} {...carData} />
              ))}
            </div>

        </section>
      </div>
        <hr />
        {/* Insurance package section */}
        <section className='pt-8'>
          <div className='bg-black font-bold text-white grid z-50 grid-cols-1 sm:grid-cols-2 mb-5'>
            <p className='my-auto justify-end font-extrabold text-3xl py-2 pl-10 sm:pl-20 md:pl-44 lg:pl-96 xl:pl-[500px]'>Extras</p>
            <p className='my-auto justify-start hidden sm:flex'>What would make your trip dreamy?</p>
          </div>

          <div className='max-w-3xl flex justify-center mx-auto pb-8'>
            <Insurance/>
          </div>
        </section>
        
        <hr/>
        <LargeCard
         img="https://links.papareact.com/4cj"
         title="The Greatest Outdoors"
         description="Wishlists curated by Airbnb."
         buttonText="Get Inspired"
        />
        <Price />
        
      </main>
    </div>
  );
}