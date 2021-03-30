import React from 'react';
import Image from 'next/image';
import styles from './country.module.css';
import Layout from '../../components/Layout';

const Country = ({country}) => {
    console.log(country)
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.image_container}>
             <Image
              className={styles.image}
              src={country.countryInfo.flag}
              alt={country.country}
              width={380}
              height={220}
              />
            </div>

            <div className={styles.info_container}>
              <h1 className={styles.title}>{country.country}</h1>
              <h3 className={styles.sub_title}>{country.continent}</h3>

              <div className={styles.population}>
                  <p><span className={styles.info_label}>
                    Country's Population:</span> {country.population.toLocaleString()}
                  </p>

                  <p><span className={styles.info_label}>
                    Total Cases:</span> {country.cases.toLocaleString()}
                  </p>
              </div>

              <div className={styles.stats_container}>
                <div className={styles.stats}>
                  <p><span className={styles.info_label}>
                    Active Cases: </span>{country.active.toLocaleString()}
                  </p>

                  <p><span className={styles.info_label}>
                    Total Deaths: </span>{country.deaths.toLocaleString()}
                  </p>

                  <p><span className={styles.info_label}>
                    Total Recovered: </span>{country.recovered.toLocaleString()}
                  </p>

                  <p><span className={styles.info_label}>
                    Current Critical: </span>{country.critical.toLocaleString()}
                  </p>
              ` </div>
               
                <div className={styles.stats_daily}>
                  <p><span className={styles.info_label}>
                    New Daily Cases: </span>
                    <span style={{color: country.todayCases !== 0 ? 'blue' : null}}>
                    {country.todayCases !== 0 ? ' +' + country.todayCases : 0}
                    </span>
                  </p>

                  <p><span className={styles.info_label}>
                    New Daily Deaths: </span>
                    <span style={{color: country.todayDeaths !== 0 ? 'red' : null}}>
                    {country.todayDeaths !== 0 ? ' +' + country.todayDeaths : 0}
                    </span>
                  </p>

                  <p><span className={styles.info_label}>
                    New Daily Recoveries: </span>
                    <span style={{color: country.todayRecovered !== 0 ? 'green' : null}}>
                    {country.todayRecovered !== 0 ? ' +' + country.todayRecovered : 0}
                    </span>
                  </p>
                </div>
                </div>

              </div>
            {/* </div> */}
        </div>
      </Layout>
    )
}

export default Country



export const getServerSideProps = async ({params}) => {
  const res = await fetch(`https://corona.lmao.ninja/v2/countries/${params.country}`)
  const country = await res.json();

  return {
    props: {
      country,
    }
  }
}

