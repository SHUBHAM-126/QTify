import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import Searchbar from '../Searchbar/Searchbar'

function Navbar() {
    return(<nav className={styles.navbar}>
        <Logo />
        <Searchbar/>
        <Button>Give Feedback</Button>
    </nav>)
}

export default Navbar