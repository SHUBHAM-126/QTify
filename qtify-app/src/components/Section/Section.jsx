import React, { useState } from 'react'
import styles from './Section.module.css'
import Card from '../../components/Card/Card'
import useFetch from '../../hooks/useFetch'
import CircularProgress from '@mui/material/CircularProgress';
import Carousel from '../Carousel/Carousel';

function Section({ title, collapse, path }) {

    const [collapsed, setCollapsed] = useState(true)

    const { data, err, loading } = useFetch(path)

    const handleCollapse = () => {
        setCollapsed(!collapsed)
    }

    return (
        <section className={styles.section}>
            <div className={styles.title_container}>
                <h3 className={styles.title}>{title}</h3>
                {collapse && <button className={styles.button} onClick={handleCollapse}>{collapsed ? 'Show All' : 'Collapse'}</button>}
            </div>

            {!loading && !err && (
                !collapsed ? (
                    //GRID
                    <div className={styles.cards}>
                        {data.map(item => (
                            <Card key={item.id} data={item} type="album" />
                        ))}
                    </div>
                ) :
                    //CAROUSEL
                    (<Carousel>
                        {data.map(item => (
                            <Card key={item.id} data={item} type="album" />
                        ))}
                    </Carousel>)

            )}

            {/* LOADING */}
            {loading && <div className={styles.loading}>
                <span>Loading</span>
                <CircularProgress/>
                </div>}

            {/* ERROR */}
            {err && <div className={styles.loading}>Failed to load - {err}</div>}

        </section>
    )
}

export default Section