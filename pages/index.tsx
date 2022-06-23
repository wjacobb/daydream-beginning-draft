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
import { Extras } from "../extras-list.js";
import { useUser } from '@auth0/nextjs-auth0';
import Details from '../components/Details'

// Get our props here.
export const getStaticProps = async () => {
  return {
    props: {
      carListData: Cars,
      extrasData: Extras,
    },
  }
}

export const  Demo = async () => {
  return alert('Some fries!');
}

export function gimmeDeets({carListData}){
  return(
      <div>
        <p>Hello There!</p>
      </div>
  ) 
    
  ;
}

export default function Home({ carListData, extrasData }) {
  const [show, setShow]=useState(true)
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  
  
  return (
    <div>
      <Head>
        <title>DayDream Car Co.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='max-w-7xl mx-auto'>
      <section>
        <Banner />
        {/* <div className='max-w-md justify-center mx-auto pb-8'>
          <Calendar />
        </div> */}
      </section>

        {/* Try to split the cars into two separate rows. */}        
        
        <div className='max-w-7xl mx-auto px-8 sm:px-16 pb-8'>
          <section className='pt-6'>
            <h2 className='text-4xl font-semibold py-4'>Select your car here!</h2>
              {/* Logic will probably take place here */}
              <div
                className='flex scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-200 scrollbar-thumb-rounded-lg py-1 -ml-3 space-x-2'>               
                  {carListData?.map(carData => (
                    <CarCards key={carData.name} {...carData} />
                  ))}
              </div>
          </section>
        </div>
        <hr />
        {/* Insurance package section */}
        <section className='pt-8'>
          <div className='bg-black font-bold text-white'>
            <div className='max-w-4xl flex justify-center mb-5'>
              <p className='my-auto flex justify-center sm:justify-end sm:pr-10 font-extrabold text-3xl py-2'>Extras</p>
              <p className='my-auto justify-start hidden sm:flex'>What would make your trip dreamy?</p>
            </div>            
          </div>
          {/* Loop through the JSON and get the data for the packages */}
          <div className='max-w-4xl justify-center mx-auto pr-2 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {extrasData?.map(extraItemData => (
                  <Insurance key={extraItemData.name} {...extraItemData} />
                ))}
          </div>
        </section>
        <hr/>
        <LargeCard/>
        <Price />        
      </main>
    </div>
  );
}