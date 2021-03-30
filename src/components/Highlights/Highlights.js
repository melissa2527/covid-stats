import React from 'react'
// import Country from '../../pages/country/[country]';
import styles from './Highlights.module.scss';

const Highlights = ({countries}) => {
    const totalActive = countries.map(c => c.active).reduce((max, cur) => max + cur);

    const totalCases = countries.map(c => c.cases).reduce((max, cur) => max + cur)

    const totalRecovered = countries.map(c => c.recovered).reduce((max, cur) => max + cur)
    
    const totalDeaths = countries.map(c => c.deaths).reduce((max, cur) => max + cur)
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <strong>Total Worldwide Cases:</strong> {totalCases.toLocaleString()}
            </div>
            <div className={styles.text}>
                <strong>Total Active Cases:</strong> {totalActive.toLocaleString()}
            </div>
            <div className={styles.text}>
                <strong>Total Recovered Cases:</strong> {totalRecovered.toLocaleString()}
            </div>
            <div className={styles.text}>
                <strong>Total Deaths:</strong> {totalDeaths.toLocaleString()}
            </div>
        </div>
    )
}

export default Highlights