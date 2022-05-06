import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Banner from "../components/Banner";
import MediumCard from "../components/MediumCard";
import medCards from "../img/mediumCard";
import LargeCard from "../components/LargeCard"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>DayDream Car Co.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {medCards?.map(({img, title}: any) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>

        </section>

        <LargeCard
         img="https://links.papareact.com/4cj"
         title="The Greatest Outdoors"
         description="Wishlists curated by Airbnb."
         buttonText="Get Inspired"
        />

        <Footer />
      </main>
    </div>
  );
}