import React from 'react'
import styles from './Searchbar.module.css'
import SearchIcon from '../../assets/search-icon.png'

function Searchbar() {
    return(
        <form className={styles.searchbar}>
            <input placeholder='Search a album of your choice'/>
            <button>
                <img src={SearchIcon} height={20} width={20}/>
            </button>
        </form>
    )
}

export default Searchbar