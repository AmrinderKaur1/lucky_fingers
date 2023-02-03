import React from "react";
import { Carousel } from "antd";

import HeaderHome from "../HomeHeader";
import carousel1 from "../../images/carousel1.jpg";
import carousel2 from "../../images/carousel2.jpg";
import carousel3 from "../../images/carousel3.jpg";
import carousel4 from "../../images/carousel4.jpg";
import item0 from '../../images/item0.jpg'
import { CarouselImg, CarouselElement } from "./HomeElements";
import Cards from "../Cards";
import Footer from "../Footer";

const CardData = [
  {
    img: item0,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor',  // description of product
    desc: '₹ 17500', // price of product
  },
  {
    img: item0,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor',  // description of product
    desc: '₹ 17500', // price of product
  },
  {
    img: item0,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor',  // description of product
    desc: '₹ 17500', // price of product
  },
  {
    img: item0,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor',  // description of product
    desc: '₹ 17500', // price of product
  }
]

const Home = () => {

  return (
    <>
      <HeaderHome />
      <Carousel autoplay>
          <CarouselElement>
            <CarouselImg src={carousel1} alt="1" />
          </CarouselElement>
          <CarouselElement>
            <CarouselImg src={carousel2} alt="2" />
          </CarouselElement>
          <CarouselElement>
            <CarouselImg src={carousel3} alt="3" />
          </CarouselElement>
          <CarouselElement>
            <CarouselImg src={carousel4} alt="4" />
          </CarouselElement>
      </Carousel>
      <Cards CardData={CardData} margin={true}/>
      <Footer />
    </>
  );
};

export default Home;
