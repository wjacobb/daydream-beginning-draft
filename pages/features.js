import React,{useState} from 'react';
import { useRouter } from "next/dist/client/router";
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

function Features() {
    return(
        <div>
            <Head>
                <title>DayDream | Features</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <p>This is the Features page!</p>
        </div>
    )
}
export default Features;