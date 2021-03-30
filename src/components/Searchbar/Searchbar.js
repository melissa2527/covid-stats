import React from 'react';
import SearchRounded from '@material-ui/icons/SearchRounded';
import styles from './Searchbar.module.scss';

const Searchbar = ({...rest}) => {
    return (
        <div className={styles.container}>
            <div className={styles.searchbar_container}>
                <input className={styles.searchbar} {...rest} />
                <SearchRounded className={styles.icon}/>
            </div>
            <div className={styles.searchbar_info}>
                See basic information about countries below.  Click on <strong>Country</strong> or <strong>Total Cases</strong> labels to change direction.  Click on a <em>specific country</em> for more detailed information.
            </div>
        </div>
    )
}

export default Searchbar
