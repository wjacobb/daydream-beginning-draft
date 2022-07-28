import React,{useState} from 'react';
import Header from "../components/Header";
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Head from 'next/head';

export const SignIn = withPageAuthRequired({
    async SignIn() {
    return(
        <div>
            <Head>
                <title>DayDream | Sign In</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <p>This is the Sign In page!</p>
        </div>
    )
    }
})

export default SignIn;