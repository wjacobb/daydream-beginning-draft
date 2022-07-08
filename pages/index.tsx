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
// export const helloThere = async ({name, imgURL, price, description}) => {
//   <div>
//       <h3>Hello there!</h3>
//       <Image src='https://1.bp.blogspot.com/-jqdDGUiT524/WVLe18tjTuI/AAAAAAAAMrY/bFBVWywp3nMPEPuml_0_P9ItOSvR_dxUACLcBGAs/s1600/30%2BAdorable%2BDog%2BMemes%2BThat%2BWill%2BMake%2BYour%2BDay.jpg' layout='fill' className='rounded-md'/>
//       <p>$Credits will work</p>
//       <p>I will do what I must</p>
//   </div>
// }

export default function Home({ carListData, extrasData }) {
  const [show, setShow]=useState(false);
  const { user, error, isLoading } = useUser();
  // const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const [isOpen, setIsOpen] = useState(false);
  
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
        <div>
        <Banner />
          <button className="text-white bg-blue-700 active:bg-blue-800 absolute top-1/3 left-1/4 px-4 py-1 rounded-md hover:scale-105 transition ease-in-out duration-300 hover:shadow-xl active:scale-100">
            <a href='#calendar-section'>
              <div className="text-xl font-extrabold text-left">
                <h1>&emsp;Date</h1>
              </div>
              <div>
                  <h2>When do you need a car?</h2>
              </div>
            </a>
          </button>
        </div>
      </section>

      <section id='calendar-section' className='max-w-7xl mx-auto px-8 sm:px-16 pb-8'>
        <h2 className='text-4xl font-semibold py-4'>Select a time!</h2>
        <div className='flex justify-center'>
          <Calendar/>
        </div>
      </section>
      <hr/>
        
      <section>
          <div className='flex justify-center'>
            {
              show?
              <div className='shadow-2xl rounded-lg border-2'>
                {carListData.map(car => {
                  return (
                    <div>
                      <div className='grid grid-cols-2'>
                        <h3 className='flex justify-start text-4xl pl-3 py-3'><strong>{car.name}</strong></h3>
                        <button className='flex justify-end my-auto mr-6' onClick={()=>setShow(false)}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className='flex justify-center mx-5'>
                        <img src={car.imgURL} layout='fill' className='rounded-md'/>
                      </div>
                      <div className='p-3 max-w-xl'>
                        <p>$<u>{car.price}/day</u></p>
                        <p>Description:</p>
                        <p>{car.description}</p>
                        <p className='mt-2'>Specifications:</p>
                        <p>{car.specs}</p>
                        <button className='bg-blue-700 px-4 py-2 font-bold rounded-md text-white mt-2 hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl bg-fixed opacity-100 md:max-w-sm active:scale-100'>Reserve</button>
                      </div>
                    </div>
                  )
                })}
              </div>:null
            }
          </div>
        </section>
        {/* Try to split the cars into two separate rows. */}        
        <div className='max-w-7xl mx-auto px-8 sm:px-16 pb-8'>
          <section className='pt-6'>
            <h2 className='text-4xl font-semibold py-4'>Select your car here!</h2>
            {/* Logic will probably take place here */}
            <div
              className='flex scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-200 scrollbar-thumb-rounded-lg py-1 -ml-3 space-x-2'>               
                {carListData?.map(carData => (
                  <div onClick={()=>setShow(true)}>
                    <CarCards key={carData.name} {...carData}  />
                  </div>
                ))}
            </div>
          </section>
        </div>
        <hr />

        {/* Insurance package section */}
        <section className='pt-8'>
          <div className='bg-black font-bold text-white'>
            <div className='flex justify-center mb-5'>
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
