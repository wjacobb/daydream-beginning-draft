import React,{useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Banner from "../components/Banner";
import LargeCard from "../components/LargeCard"
import Price from "../components/Price"
import Cars from "../components/CarCards"
import Calendar from "../components/Calendar"
import Insurance from "../components/Insurance"

export default function Home() {
  const [show, setShow]=useState(true)
  return (
    <div className="">
      <Head>
        <title>DayDream Car Co.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <section className='grid grid-cols-1 lg:grid-cols-2 '>
        <Banner />
        <div className='max-w-md justify-center mx-auto pb-8'>
          <Calendar />
        </div>
      </section>
      
      <main>
        
      
      <div className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold py-8'>Cars Here!</h2>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
              <Cars/>
              <Cars/>
              <Cars/>
              <Cars/>
              <Cars/>
              <Cars/>
            </div>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
              <Cars/>
              <Cars/>
              <Cars/>
              <Cars/>
              <Cars/>
              <Cars/>
            </div>            

          
          {/* <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {medCards?.map(({img, title}: any) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>  */}

        </section>
      </div>
        <hr />
        <section>
          <p className='font-bold text-xl grid mb-5 max-w-7xl mx-auto px-8 sm:px-10 py-5'>Select package here!</p>
          <div className='max-w-md flex justify-center mx-auto pb-8'>
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