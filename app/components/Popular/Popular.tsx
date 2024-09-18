"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FoodCard from './FoodCard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
const Popular = () => {
  return (
    <div className='pt-[3rem] pb-[3rem] '>
        <h1 className='heading'>
            Our popular <span className='text-red-600'> Foods</span>
        </h1>
        <div className='w-[80%] mt-[4rem] mx-auto'>
                <Carousel additionalTransfrom={0} arrows={true} autoPlay={true} autoPlaySpeed={4000} centerMode={false} infinite responsive={responsive}
                itemClass='item' showDots={false}>
                   <FoodCard title="roll" image="/images/roll.jpeg" reviews="5" price="20"/>
                   <FoodCard title="neyappam" image="/images/ney.jpeg" reviews="6" price="15"/>
                   <FoodCard title="achapam" image="/images/achap.jpeg" reviews="4" price="10"/>
                   <FoodCard title="roll" image="/images/roll.jpeg" reviews="5" price="30"/>
                   <FoodCard title="samoosa" image="/images/sam.jpeg" reviews="5" price="10"/>
                   <FoodCard title="pazhampori" image="/images/images.jpeg" reviews="6" price="10"/>
                   <FoodCard title="pazhampori" image="/images/pazham.jpeg" reviews="4" price="20"/>
                   <FoodCard title="vada" image="/images/vada.jpeg" reviews="5" price="10"/>
                   <FoodCard title="parip vada" image="/images/parip.jpeg" reviews="5" price="10"/>
                </Carousel>
        </div>
    </div>
  )
}

export default Popular