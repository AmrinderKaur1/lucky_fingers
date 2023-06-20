import React from "react";
import { Card, Col, Row } from "antd";

import { CardContainer, CustomCard, CardImg } from "./CardElements";
const { Meta } = Card;

const Cards = (props) => {
  const { CardData, margin, height } = props;

  return (
    <CardContainer margin={margin}>
      <Row gutter={24} style={{ margin: "0", padding: "14px 0 0 0" }}>
        <Col span={12}>
          <CustomCard
            hoverable
            cover={<CardImg alt="example" src={CardData[0].img} />}
            height={height}
          >
            <Meta title={CardData[0].title} description={CardData[0].desc} />
          </CustomCard>
        </Col>
        <Col span={12}>
          <CustomCard
            hoverable
            cover={<CardImg alt="example" src={CardData[1].img} />}
            height={height}
          >
            <Meta title={CardData[1].title} description={CardData[1].desc} />
          </CustomCard>
        </Col>
      </Row>
      <Row gutter={24} style={{ margin: "0", padding: "14px 0 14px 0" }}>
        <Col span={12}>
          <CustomCard
            hoverable
            cover={<CardImg alt="example" src={CardData[2].img} />}
            height={height}
          >
            <Meta title={CardData[2].title} description={CardData[2].desc} />
          </CustomCard>
        </Col>
        <Col span={12}>
          <CustomCard
            hoverable
            cover={<CardImg alt="example" src={CardData[3].img} />}
            height={height}
          >
            <Meta title={CardData[3].title} description={CardData[3].desc} />
          </CustomCard>
        </Col>
      </Row>
    </CardContainer>
  );
};

export default Cards;
