import React, {useState, useEffect} from 'react';
import styles from './CountriesTable.module.scss';
import SortOrder from './SortOrder';
import Link from 'next/link';

 const orderBy = (countries, value, order) => {
    if (order === 'asc') {
        return [...countries].sort((a, b) => a[value] > b[value] ? 1 : - 1 )
    }
    if (order === 'desc') {
        return [...countries].sort((a, b) => a[value] > b[value] ? - 1 : 1)
    }
    return countries;
}


const CountriesTable = ({countries}) => {
    const [order, setOrder] = useState();
    const [value, setValue] = useState();

    const orderList = orderBy(countries, value, order);

    const switchOrder = () => {
        if (!order) {
            setOrder('desc');
        } else if (order === 'desc') {
            setOrder('asc');
        } else {
            setOrder(null);
        }
    }

    const orderCountries = (value) => {
        switchOrder();
        setValue(value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.header_row}>
            <button className={styles.column} id={styles.button} onClick={() => orderCountries('country')}>
                <div>Country </div>
                <SortOrder order={order}/>
            </button>
                 
            <button className={styles.column} id={styles.button} onClick={() => orderCountries('cases')}>
                <div>Total Cases </div>
                <SortOrder order={order}/>
            </button>

            <div className={styles.column}>
                New Cases
            </div>

            <div className={styles.column}>
                New Deaths
            </div>

            <div className={styles.column}>
                New Recoveries
            </div>

            {/* {showRows ? 
            <>
            <div className={styles.column}>
                Total Deaths 
            </div>
                
           
            <div className={styles.column}>
                Total Recovered
            </div>
            </>
            : null} */}
  
        </div>     

        <div className={styles.body_row}>
           {orderList.map((country, index) => 
               <Link key={index} href={`/country/${country.country}`}>
                    <div className={styles.row} >
                        <div className={styles.info_column} id={styles.info_name}>{country.country}</div>
                   
                        <div className={styles.info_column}>{country.cases.toLocaleString()}</div>
                    
                        <div className={styles.info_column} 
                            id={styles.info_new_cases}
                            style={{background: country.todayCases !== 0 ? 'lightyellow' : null}}>
                            {country.todayCases !== 0 ? 
                            '+' + country.todayCases.toLocaleString() : null}
                        </div>

                        <div className={styles.info_column} 
                            style={{background: country.todayDeaths !== 0 ? 'red' : null, color: country.todayDeaths !== 0 ? '#fff' : null}}>
                            {country.todayDeaths !== 0 ? 
                            '+' + country.todayDeaths.toLocaleString() : null}
                        </div>

                        <div className={styles.info_column} 
                            style={{background: country.todayRecovered !== 0 ? 'lightgreen' : null}}>
                            {country.todayRecovered !== 0 ? 
                            '+' + country.todayRecovered.toLocaleString(): null}
                        </div>

                    {/* {showRows ?
                    <>
                        <div className={styles.info_column}>{country.deaths.toLocaleString()}</div>
                        <div className={styles.info_column}>{country.recovered.toLocaleString()}</div>
                    </> : null} */}
                    </div>
                </Link>
            )} 
        </div>
        </div>
    )
}

export default CountriesTable
