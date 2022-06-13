import React,{useState} from 'react';
import Header from "../components/Header";
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export const SignIn = withPageAuthRequired({
    async SignIn() {
    return(
        <div>
            <Header />
            <p>This is the Sign In page!</p>
        </div>
    )
    }
})

export default SignIn;