import React, {useState} from 'react';
import Layout from '../components/Layout';
import CountriesTable from '../components/CountriesTable/CountriesTable';
import Banner from '../components/Banner/Banner';
import Searchbar from '../components/Searchbar/Searchbar';
import Highlights from '../components/Highlights/Highlights';
// import fetch from 'isomorphic-unfetch';


export default function Home({countries}) {
  console.log(countries)
  const [search, setSearch] = useState('');

  const filteredSearch = countries.filter(country => country.country.toLowerCase().includes(search));

  const onInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  }

  return (
    <Layout>
      <Banner />
      <Highlights countries={countries} />
      <Searchbar placeholder='Filter by Country' onChange={onInputChange}/>
      {/* <div className={styles.countries}>Found {countries.length} Countries</div>  */}
      <CountriesTable countries={filteredSearch}/>
    </Layout>
  )
}

// updated regularly throughout the day
export const getServerSideProps = async () => {
  const res = await fetch('https://corona.lmao.ninja/v2/countries')

  const countries = await res.json()

  return {
    props: {
      countries,
    }
  }
}
