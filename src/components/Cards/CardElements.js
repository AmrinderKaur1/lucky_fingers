import styled from "styled-components";
import { Card } from "antd";

export const CardContainer = styled.div`
    font-size: 11px;
    color: #333;
    margin-bottom: ${props => props.margin ? '44px' : '0'};
`;

export const CustomCard = styled(Card)`
    box-shadow: 2px 2px 3px rgb(26 26 26 / 20%);
    animation: 1.2s ease 0s 1 normal none running show;
    height: ${props => props.height ? '250px' : 'auto'};
    .ant-card-meta-detail {
        text-align: center;
        padding: 4px;
    }
    .ant-card-body {
        padding: 0;
    }
    .ant-card-meta-title {
        font-size: 8px;
        white-space: normal;
    }
    .ant-card-meta-description {
        text-align: left;
        padding: 2px;
        font-size: 11px;
        color: #f37b1d;
    }
`;

export const CardImg = styled.img`
    padding: 14px;
`;