import React, { useEffect, useState } from 'react'
import styles from './Section.module.css'
import axios from 'axios'
import Card from '../../components/Card/Card'

function Section({title, collapse, endpoint}) {

    const [data, setData] = useState([])
    const [collapsed, setCollapsed] = useState(true)

    useEffect(()=> {

        const fetching = async () => {
            const response = await axios.get(endpoint);
            setData(response.data)
        }

        fetching()

    }, [])

    const handleCollapse = () => {
        setCollapsed(!collapsed)
    }

    return(
        <section className={styles.section}>
            <div className={styles.title_container}>
                <h3 className={styles.title}>{title}</h3>
                {collapse && <button className={styles.button} onClick={handleCollapse}>{collapsed ? 'Show All' : 'Collapse' }</button>}
            </div>

            {data && (<div className={`${styles.cards} ${collapsed ? styles.collapsed : ''}`}>
                {data.map(item => (
                    <Card key={item.id} data={item} type="album" />
                ))}
            </div>)}

        </section>
    )
}

export default Section