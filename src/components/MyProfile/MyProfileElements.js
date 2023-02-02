import styled from "styled-components";
import { Avatar, Card, Button, Divider, Col, Modal } from 'antd';
import { DownOutlined } from "@ant-design/icons";

export const ProfileContainer = styled.div``;

export const DropdownContainer = styled.div``;

export const DropdownCol = styled(Col)`
    padding: 0 5px;
     height: 20px;
     display: flex;
     justify-content: space-between;
`;
export const DropdownA = styled.div``;
export const modal = styled(Modal)`
    .ant-modal-content {
        padding: 18px 14px;
    }
    button {
        background: linear-gradient(90deg,#ff9801,#ff570a);
    }
`;
export const Btn = styled(Button)`
    background: linear-gradient(90deg,#ff9801,#ff570a);
    padding: 0 12px;
    color: #fff;
    margin-left: calc(50% - 60px);
`;
export const ContentContainer = styled.div`
    padding: 14px;
`;
export const divider = styled(Divider)`
    /* margin: 0; */
`;

export const CardContainer = styled(Card)`
    background: #f9f7e9;
    margin: 24px 14px;
    .ant-card-body {
        padding: 16px;
    }
`;