import React,{useState} from 'react';
import { useRouter } from "next/dist/client/router";
import Head from 'next/head';
import Image from 'next/image';
import Header from "../components/Header";


function About() {
    return(
        <div>
            <Header />
            <p>This is the about us page!</p>
        </div>
    )
}
export default About;