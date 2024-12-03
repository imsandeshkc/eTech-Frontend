import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import TrendingProduct from '../shop/TrendingProduct'
import PromoBanner from './PromoBanner';

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <TrendingProduct />
      <PromoBanner />
    </>
  )
}

export default Home