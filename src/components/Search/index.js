import React from "react";
import { Input, Space } from "antd";

import Cards from "../Cards";
import img1 from "../../images/search/img1.jpg";
import img2 from "../../images/search/img2.jpg";
import img3 from "../../images/search/img3.jpg";
import img4 from "../../images/search/img4.jpg";
import { SearchBox, SearchContainer } from "./SearchElements";
import Footer from "../Footer";

const { Search } = Input;
const CardData = [
  {
    img: img1,
    title:
      "Yellow Chimes A5 Grade American Crystal Traditional Gold Plated Without Piercing Combo Nose Pins for Women &amp; Girls", // description of product
    desc: "₹ 17500.00", // price of product
  },
  {
    img: img2,
    title:
      "PC Jeweller The Quizmu 18KT Yellow Gold and Diamond Nose Pin for Women", // description of product
    desc: "₹ 17500.00", // price of product
  },
  {
    img: img3,
    title:
      "PC Jeweller The Fallamhain 18KT Yellow Gold and Diamond Nose Pin for Women", // description of product
    desc: "₹ 17500.00", // price of product
  },
  {
    img: img4,
    title:
      "PC Jeweller The Cormack 18KT Yellow Gold and Diamond Nose Pin for Women", // description of product
    desc: "₹ 17500.00", // price of product
  },
];

const SearchPage = () => {
  const onSearch = (value) => console.log(value);
  return (
    <>
      <SearchContainer>
        <SearchBox
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          // onSearch={onSearch}
        />
        <Cards CardData={CardData} margin={false} height={true} />
      </SearchContainer>
      <Footer />
    </>
  );
};

export default SearchPage;
