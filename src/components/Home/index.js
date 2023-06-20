import React from "react";
import { Carousel } from "antd";

import HeaderHome from "../HomeHeader";
import carousel1 from "../../images/carousel1.jpg";
import carousel2 from "../../images/carousel2.jpg";
import carousel3 from "../../images/carousel3.jpg";
import carousel4 from "../../images/carousel4.jpg";
import item0 from "../../images/item0.jpg";
import { CarouselImg, CarouselElement } from "./HomeElements";
import Cards from "../Cards";
import Footer from "../Footer";
import useGameHook from "../../helpers/useGameHook";

const CardData = [
  {
    img: item0,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor", // description of product
    desc: "₹ 17500", // price of product
  },
  {
    img: item0,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor", // description of product
    desc: "₹ 17500", // price of product
  },
  {
    img: item0,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor", // description of product
    desc: "₹ 17500", // price of product
  },
  {
    img: item0,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor", // description of product
    desc: "₹ 17500", // price of product
  },
];

function Home() {
  const gameHook = useGameHook();
  return (
    <>
      <HeaderHome />
      <Carousel autoplay>
        {[carousel1, carousel2, carousel3, carousel4].map((el, key) => (
          <CarouselElement>
            <CarouselImg src={el} alt={key} key={key} />
          </CarouselElement>
        ))}
      </Carousel>
      <Cards CardData={CardData} margin />
      <Footer />
    </>
  );
}

export default Home;
