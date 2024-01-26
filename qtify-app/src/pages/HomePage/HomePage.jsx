import React from 'react'
import Hero from "../../components/Hero/Hero";
import Section from '../../components/Section/Section';

function HomePage() {

    return(
        <div>
            <Hero />
            <Section title="Top Albums" path="/albums/top" collapse />
            <Section title="New Albums" path="/albums/new" collapse />
        </div>
    )
}

export default HomePage