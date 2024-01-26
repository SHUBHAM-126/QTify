import React from 'react'
import Hero from "../../components/Hero/Hero";
import Section from '../../components/Section/Section';
import { useOutletContext } from 'react-router-dom';

function HomePage() {

    const {genres} = useOutletContext()

    return(
        <div>
            <Hero />
            <Section title="Top Albums" path="/albums/top" collapse type="album"/>
            <Section title="New Albums" path="/albums/new" collapse type="album"/>
            <Section title="Songs" path="/songs" type="song" genres={genres}/>
        </div>
    )
}

export default HomePage