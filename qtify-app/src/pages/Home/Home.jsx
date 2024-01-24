import React from 'react'
import Hero from "../../components/Hero/Hero";
import { useEffect } from 'react';
import Section from '../../components/Section/Section';

function Home() {

    useEffect(()=>{
        
    }, [])

    return(
        <div>
            <Hero />
            <Section title="Top Albums" endpoint="https://qtify-backend-labs.crio.do/albums/top" collapse />
        </div>
    )
}

export default Home