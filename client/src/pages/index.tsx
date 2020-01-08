import React from 'react'
import Carousel from '../components/carousel'
import Directory from '../components/directory'
import './styles.scss'

const HomePage = () => (
  <div className='home-page'>
    <Carousel />
    <Directory />
  </div>
)

export default HomePage
