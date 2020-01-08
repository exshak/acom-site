import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import slideBlue from '../../assets/images/slide-blue.jpg'
import slidePink from '../../assets/images/slide-pink.jpg'
import slideTeal from '../../assets/images/slide-teal.jpg'
import slideYellow from '../../assets/images/slide-yellow.jpg'
import './styles.scss'

const Carousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out'
  }

  return (
    <Slider {...settings}>
      <div className='slide-image'>
        <img
          src={slideTeal}
          alt='Background created by berlionemore_contributor - www.freepik.com'
        />
      </div>
      <div className='slide-image'>
        <img
          src={slideYellow}
          alt='Background created by berlionemore_contributor - www.freepik.com'
        />
      </div>
      <div className='slide-image'>
        <img
          src={slidePink}
          alt='Background created by berlionemore_contributor - www.freepik.com'
        />
      </div>
      <div className='slide-image'>
        <img
          src={slideBlue}
          alt='Background created by berlionemore_contributor - www.freepik.com'
        />
      </div>
    </Slider>
  )
}

export default Carousel
